import { useEffect, useRef, useState } from "preact/hooks";
import { ChatMessage } from "../../types/ChatMessage";
import "./Chat.css";

type ChatProps = {
  messages: ChatMessage[];
};
export default function Chat({ messages }: ChatProps) {
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

  const renderMessages = () => {
    return messages.map((message) => {
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
            <div class="chat__message__content">{message.content}</div>
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
