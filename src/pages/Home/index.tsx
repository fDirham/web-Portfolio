import "./style.css";
import { useEffect, useState } from "preact/hooks";
import ProjectListMenu from "../../components/ProjectListMenu";
import { ChatMessage } from "../../types/ChatMessage";
import {
  NAME_OG_AUTHOR,
  NAME_USER,
  URL_BLANK_AVATAR,
  URL_OG_AUTHOR_PIC,
} from "../../constants/globalConstants";
import BottomContainer from "../../components/BottomContainer";
import Header from "../../components/Header";
import Chat from "../../components/Chat";
import { AppShowcaseItem } from "../../types/AppShowcaseItem";
import OnboardingOptions from "../../components/OnboardingOptions";
import { UserIdentity } from "../../types/UserIdentity";
import {
  SR_CHAIN_ONBOARDING_RECRUITER,
  SR_CHAT_APP_REVEAL,
  SR_HELP_REVEAL,
  SR_INPUT_REVEAL,
  SR_PROJECTS_REVEAL__MOBILE,
  SR_PROJECTS_REVEAL__WEB,
  SR_WELCOME,
} from "../../constants/scriptedResponses";
import useWindowSize from "../../hooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 984;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showProjectListMenu, setShowProjectListMenu] = useState(false);
  const [showBottomContainer, setShowBottomContainer] = useState(false);
  const [showOnboardingOptions, setShowOnboardingOptions] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);

  useEffect(() => {
    startOnboarding();
  }, []);

  // MARK: Onboarding
  async function startOnboarding() {
    await waitDelay(0.5);
    setMessages([
      {
        id: new Date().toISOString(),
        avatarUrl: URL_OG_AUTHOR_PIC,
        author: NAME_OG_AUTHOR,
        content: SR_WELCOME,
      },
    ]);
    await waitDelay(2);
    setShowOnboardingOptions(true);
  }

  async function handleOnboardingOptionSelect(option: UserIdentity) {
    setShowOnboardingOptions(false);

    await waitDelay(1);
    await addMessageContentAndWait(option, false);

    await addMessageContentAndWait("Typing...", true);

    switch (option) {
      case UserIdentity.RECRUITER:
        await chainAddMessageContent(SR_CHAIN_ONBOARDING_RECRUITER, true, true);
    }

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

    await addMessageContentAndWait(SR_HELP_REVEAL, true);
    setInputEnabled(true);
  }

  // MARK: Interactions
  function handleInputFormSubmit(e?: SubmitEvent) {
    if (e) {
      e.preventDefault();
    }

    const newMessages = [...messages];
    const newMessage: ChatMessage = {
      id: new Date().toISOString(),
      avatarUrl: URL_BLANK_AVATAR,
      content: inputValue,
      author: "You",
    };
    newMessages.push(newMessage);
    setMessages(newMessages);
    setInputValue("");
  }

  function handleAppClick(app: AppShowcaseItem) {
    addMessage({
      id: new Date().toISOString(),
      avatarUrl: URL_OG_AUTHOR_PIC,
      content: "",
      author: NAME_OG_AUTHOR,
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
      avatarUrl: isBot ? URL_OG_AUTHOR_PIC : URL_BLANK_AVATAR,
      author: isBot ? NAME_OG_AUTHOR : NAME_USER,
      content: content,
    });
  }

  async function addMessageContentAndWait(content: string, isBot: boolean) {
    addMessage({
      id: new Date().toISOString(),
      avatarUrl: isBot ? URL_OG_AUTHOR_PIC : URL_BLANK_AVATAR,
      author: isBot ? NAME_OG_AUTHOR : NAME_USER,
      content: content,
    });
    await waitForUserToReadContent(content);
  }

  async function chainAddMessageContent(
    contentList: string[],
    isBot: boolean,
    replaceFirst: boolean = false
  ) {
    for (let i = 0; i < contentList.length; i++) {
      const msgContent = contentList[i];

      if (i == 0 && replaceFirst) {
        replaceLastMessageContent(msgContent, isBot);
      } else {
        addMessageContent(msgContent, isBot);
      }

      await waitForUserToReadContent(msgContent);
    }
  }

  function replaceLastMessage(message: ChatMessage) {
    setMessages((msgs) => {
      const newMessages = [...msgs];
      newMessages.pop();
      newMessages.push(message);
      return newMessages;
    });
  }

  function replaceLastMessageContent(content: string, isBot: boolean) {
    replaceLastMessage({
      id: new Date().toISOString(),
      avatarUrl: isBot ? URL_OG_AUTHOR_PIC : URL_BLANK_AVATAR,
      author: isBot ? NAME_OG_AUTHOR : NAME_USER,
      content: content,
    });
  }

  async function waitForUserToReadContent(content: string) {
    // Around 4 words per second
    const words = content.split(" ");
    const delay = Math.ceil(words.length / 4);
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
        />
        <Chat messages={messages} />
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
      />
    </div>
  );
}
