import { useEffect, useRef, useState } from "preact/hooks";
import { ChatMessage } from "../../types/ChatMessage";
import "./Chat.css";
import { NAME_BOT, URL_BOT_AVATAR } from "../../constants/globalConstants";
import { formatTextForChat } from "../../helpers/formatTextForChat";

type ChatProps = {
  messages: ChatMessage[];
  isBotTyping: boolean;
};

export default function Chat({ messages, isBotTyping }: ChatProps) {
  const mostRecentMessageRef = useRef(null);
  const [mostRecentMessageId, setMostRecentMessageId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (messages.length) {
      setMostRecentMessageId(messages[messages.length - 1]?.id);

      setTimeout(() => {
        if (mostRecentMessageRef.current) {
          mostRecentMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [messages]);

  const renderMessageContent = (message: ChatMessage) => {
    if (message.appShowcaseItem) {
      const { appShowcaseItem } = message;
      const videoClass = appShowcaseItem.isVideoHorizontal
        ? "chat__message__video--horizontal"
        : "chat__message__video--vertical";

      return (
        <div class="chat__message__content chat__message__content--app-showcase">
          <video controls={true} class={videoClass}>
            <source src={appShowcaseItem.videoUrl} type="video/mp4" />
          </video>
          <p>
            This is <b>{appShowcaseItem.name}</b>.{" "}
            {formatTextForChat(appShowcaseItem.description)}
          </p>
          <div class="chat__message__links-container">
            {appShowcaseItem.links.map((link) => {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="chat__message__link"
                  key={link.url}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div class="chat__message__content">
          {formatTextForChat(message.content)}
        </div>
      );
    }
  };

  const renderMessages = () => {
    const msgList = [...messages];
    if (isBotTyping) {
      msgList.push({
        id: "typing",
        avatarUrl: URL_BOT_AVATAR,
        author: NAME_BOT,
        content: "Typing...",
      });
    }

    return msgList.map((message) => {
      return (
        <div
          class="chat__message"
          key={message.id}
          ref={mostRecentMessageId === message.id ? mostRecentMessageRef : null}
        >
          <div class="chat__message__leading">
            <div class="chat__message__avatar-container">
              <img src={message.avatarUrl} alt={message.author} />
            </div>
          </div>
          <div class="chat__message__main">
            <span class="chat__message__author">{message.author}</span>
            <div class="chat__message__content-wrapper">
              {renderMessageContent(message)}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div class="chat__container">
      <div class="chat__messages-container">{renderMessages()}</div>
    </div>
  );
}
