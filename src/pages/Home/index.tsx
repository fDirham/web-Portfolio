import "./style.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "preact/hooks";
import ProjectListMenu from "../../components/ProjectListMenu";
import { ChatMessage } from "../../types/ChatMessage";
import {
  URL_BLANK_AVATAR,
  URL_HEADSHOT,
} from "../../constants/globalConstants";
import BottomContainer from "../../components/BottomContainer";
import Header from "../../components/Header";
import Chat from "../../components/Chat";

const PLACEHOLDER_MESSAGES: ChatMessage[] = [
  {
    id: "one",
    avatarUrl: URL_HEADSHOT,
    author: "Fajar Dirham",
    content:
      "👋 Welcome to my portfolio! My name is Fajar Dirham. Before we get started, tell me a little about yourself.",
  },
  {
    id: "two",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "I’m a recruiter.",
  },
];

export default function Home() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 500;

  const [showProjectListMenu, setShowProjectListMenu] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>(PLACEHOLDER_MESSAGES);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <div class="home-container">
      <Header
        toggleProjectListMenu={() => setShowProjectListMenu((curr) => !curr)}
      />
      <div class="home-content">
        <ProjectListMenu
          show={showProjectListMenu}
          setShow={setShowProjectListMenu}
        />
        <Chat messages={messages} />
      </div>
      <BottomContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputFormSubmit={handleInputFormSubmit}
        showProjectListMenu={showProjectListMenu}
      />
    </div>
  );
}
