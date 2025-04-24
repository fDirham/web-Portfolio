import "./style.css";
import { useState } from "preact/hooks";
import ProjectListMenu from "../../components/ProjectListMenu";
import { ChatMessage } from "../../types/ChatMessage";
import {
  NAME_OG_AUTHOR,
  URL_BLANK_AVATAR,
  URL_OG_AUTHOR_PIC,
} from "../../constants/globalConstants";
import BottomContainer from "../../components/BottomContainer";
import Header from "../../components/Header";
import Chat from "../../components/Chat";
import { PLACEHOLDER_MESSAGES } from "../../constants/placeholders";
import { AppShowcaseItem } from "../../types/AppShowcaseItem";

export default function Home() {
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

  function handleAppClick(app: AppShowcaseItem) {
    const newMessages = [...messages];

    const newMessage: ChatMessage = {
      id: new Date().toISOString(),
      avatarUrl: URL_OG_AUTHOR_PIC,
      content: "",
      author: NAME_OG_AUTHOR,
      appShowcaseItem: app,
    };

    newMessages.push(newMessage);
    setMessages(newMessages);
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
          onAppClick={handleAppClick}
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
