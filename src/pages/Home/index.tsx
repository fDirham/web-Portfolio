import "./style.css";
import { useEffect, useState } from "preact/hooks";
import ProjectListMenu from "../../components/ProjectListMenu";
import { ChatMessage } from "../../types/ChatMessage";
import {
  NAME_BOT,
  NAME_USER,
  PRELOAD_IMG_SRC_LIST,
  URL_BLANK_AVATAR,
  URL_BOT_AVATAR,
} from "../../constants/globalConstants";
import BottomContainer from "../../components/BottomContainer";
import Header from "../../components/Header";
import Chat from "../../components/Chat";
import { AppShowcaseItem } from "../../types/AppShowcaseItem";
import OnboardingOptions from "../../components/OnboardingOptions";
import { UserIdentity } from "../../types/UserIdentity";
import {
  SR_BOT_ERROR,
  SR_CHAIN_JUST_BROWSING,
  SR_CHAIN_ONBOARDING_CO_FOUNDER,
  SR_CHAIN_ONBOARDING_CONTRACTOR,
  SR_CHAIN_ONBOARDING_ENGINEER,
  SR_CHAIN_ONBOARDING_RECRUITER,
  SR_CHAT_APP_REVEAL,
  SR_COMMAND_HELP,
  SR_COMMAND_NOT_FOUND,
  SR_FIRST_BOT_CHAT_DISCLAIMER,
  SR_HELP_REVEAL,
  SR_INPUT_REVEAL,
  SR_NORMAL_WELCOME,
  SR_PROJECTS_REVEAL__MOBILE,
  SR_PROJECTS_REVEAL__WEB,
  SR_WELCOME,
} from "../../constants/scriptedResponses";
import useWindowSize from "../../hooks/useWindowSize";
import usePreloadImages from "../../hooks/usePreloadImages";
import { portfolioChat } from "../../helpers/backendController";

export default function Home() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 984;

  usePreloadImages(PRELOAD_IMG_SRC_LIST);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showProjectListMenu, setShowProjectListMenu] = useState(false);
  const [showBottomContainer, setShowBottomContainer] = useState(false);
  const [showOnboardingOptions, setShowOnboardingOptions] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);
  const [isBotTyping, setBotTyping] = useState(false);
  const [isStarted, setStarted] = useState(true);
  const [hasChatted, setHasChatted] = useState(false);

  useEffect(() => {
    startNormalChat();
    // if (!isStarted) {
    //   startOnboarding();
    //   setStarted(true);
    // }
  }, [isStarted]);

  // MARK: Normal chat state
  function startNormalChat() {
    setShowHeader(true);
    setShowProjectListMenu(isMobile);
    setShowBottomContainer(true);
    setShowOnboardingOptions(false);
    setInputEnabled(true);

    setMessages([
      {
        id: new Date().toISOString(),
        avatarUrl: URL_BOT_AVATAR,
        author: NAME_BOT,
        content: SR_NORMAL_WELCOME,
      },
    ]);
  }

  // MARK: Onboarding
  async function startOnboarding() {
    setShowOnboardingOptions(true);
    setShowHeader(false);
    setShowProjectListMenu(false);
    setShowBottomContainer(false);
    setInputEnabled(false);

    setMessages([
      {
        id: new Date().toISOString(),
        avatarUrl: URL_BOT_AVATAR,
        content: SR_WELCOME,
        author: NAME_BOT,
      },
    ]);
  }

  async function handleOnboardingOptionSelect(option: UserIdentity) {
    setShowOnboardingOptions(false);

    await waitDelay(1);
    await addMessageContentAndWait(option, false);

    setBotTyping(true);
    await waitDelay(3);

    let chainMsg: string[] = [];
    switch (option) {
      case UserIdentity.RECRUITER:
        chainMsg = SR_CHAIN_ONBOARDING_RECRUITER;
        break;
      case UserIdentity.ENGINEER:
        chainMsg = SR_CHAIN_ONBOARDING_ENGINEER;
        break;
      case UserIdentity.LOOKING_FOR_CONTRACTOR:
        chainMsg = SR_CHAIN_ONBOARDING_CONTRACTOR;
        break;
      case UserIdentity.CO_FOUNDER:
        chainMsg = SR_CHAIN_ONBOARDING_CO_FOUNDER;
        break;
      case UserIdentity.JUST_BROWSING:
        chainMsg = SR_CHAIN_JUST_BROWSING;
        break;
    }

    await chainAddMessageContent(chainMsg, true);

    await addMessageContentAndWait(SR_CHAT_APP_REVEAL, true);

    setShowBottomContainer(true);
    await addMessageContentAndWait(SR_INPUT_REVEAL, true);

    setShowHeader(true);
    if (isMobile) {
      await addMessageContentAndWait(SR_PROJECTS_REVEAL__MOBILE, true);
    } else {
      setShowProjectListMenu(true);
      await addMessageContentAndWait(SR_PROJECTS_REVEAL__WEB, true);
    }

    setBotTyping(false);
    setInputEnabled(true);
    await addMessageContentAndWait(SR_HELP_REVEAL, true);
  }

  // MARK: Interactions
  async function handleInputFormSubmit(e?: SubmitEvent) {
    if (e) {
      e.preventDefault();
    }

    // TODO: More sanitization
    const newContent = inputValue.trim();

    const newMessages = [...messages];
    const newMessage: ChatMessage = {
      id: new Date().toISOString(),
      avatarUrl: URL_BLANK_AVATAR,
      content: newContent,
      author: NAME_USER,
    };
    newMessages.push(newMessage);
    setMessages(newMessages);
    setInputValue("");

    const isCommand = newContent.startsWith("/");
    if (isCommand) {
      const command = newContent.substring(1).toLowerCase();
      await handleCommand(command);
    } else {
      await handleBotChat(newContent, newMessages);
    }
  }

  async function handleCommand(command: string) {
    setBotTyping(true);
    await waitDelay(1);
    setBotTyping(false);
    switch (command) {
      case "help":
        await addMessageContentAndWait(SR_COMMAND_HELP, true);
        break;
      case "reboard":
        startOnboarding();
        break;
      default:
        await addMessageContentAndWait(SR_COMMAND_NOT_FOUND, true);
        break;
    }
  }

  async function handleBotChat(newMessage: string, newMessages: ChatMessage[]) {
    //  Bot chat

    if (!hasChatted) {
      await addMessageContentAndWait(SR_FIRST_BOT_CHAT_DISCLAIMER, true);
      setHasChatted(true);
    }

    setBotTyping(true);
    await waitDelay(1);

    const prevMessages = newMessages
      .filter((msg) => !msg.isLoading)
      .map((msg) => {
        const role = msg.author === NAME_BOT ? "assistant" : "user";
        let content = msg.content;
        if (msg.appShowcaseItem) {
          content =
            "This is one of my projects. " + msg.appShowcaseItem.description;
        }

        return {
          role,
          content,
        };
      });

    try {
      const reply = await portfolioChat(newMessage, prevMessages);
      addMessageContent(reply, true);
    } catch (error) {
      addMessageContent(SR_BOT_ERROR, true);
    }
    setBotTyping(false);
  }

  function handleAppClick(app: AppShowcaseItem) {
    addMessage({
      id: new Date().toISOString(),
      avatarUrl: URL_BOT_AVATAR,
      content: "",
      author: NAME_BOT,
      appShowcaseItem: app,
    });

    if (isMobile) {
      setShowProjectListMenu(false);
    }
  }

  // MARK: Helper functions
  function addMessage(message: ChatMessage) {
    setMessages((msgs) => {
      const newMessages = [...msgs];
      newMessages.push(message);
      return newMessages;
    });
  }

  function addMessageContent(content: string, isBot: boolean) {
    addMessage({
      id: new Date().toISOString(),
      avatarUrl: isBot ? URL_BOT_AVATAR : URL_BLANK_AVATAR,
      author: isBot ? NAME_BOT : NAME_USER,
      content: content.trim(),
    });
  }

  async function addMessageContentAndWait(content: string, isBot: boolean) {
    addMessage({
      id: new Date().toISOString(),
      avatarUrl: isBot ? URL_BOT_AVATAR : URL_BLANK_AVATAR,
      author: isBot ? NAME_BOT : NAME_USER,
      content: content,
    });
    await waitForUserToReadContent(content);
  }

  async function chainAddMessageContent(contentList: string[], isBot: boolean) {
    for (let i = 0; i < contentList.length; i++) {
      const msgContent = contentList[i];

      addMessageContent(msgContent, isBot);

      await waitForUserToReadContent(msgContent);
    }
  }

  async function waitForUserToReadContent(content: string) {
    // Around 4 words per second
    const words = content.split(" ");
    const delay = Math.ceil(words.length / 5);
    await waitDelay(delay);
  }

  async function waitDelay(durationS: number) {
    return new Promise((resolve) => setTimeout(resolve, durationS * 1000));
  }

  return (
    <div class="home-container">
      <Header
        toggleProjectListMenu={() => setShowProjectListMenu((curr) => !curr)}
        show={showHeader}
      />
      <div class="home-content">
        <ProjectListMenu
          show={showProjectListMenu}
          setShow={setShowProjectListMenu}
          onAppClick={handleAppClick}
          inputEnabled={inputEnabled}
        />
        <Chat messages={messages} isBotTyping={isBotTyping} />
      </div>
      <OnboardingOptions
        show={showOnboardingOptions}
        onOptionSelect={handleOnboardingOptionSelect}
      />
      <BottomContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputFormSubmit={handleInputFormSubmit}
        showProjectListMenu={showProjectListMenu}
        show={showBottomContainer}
        inputEnabled={inputEnabled}
      />
    </div>
  );
}
