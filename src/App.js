import { useCallback, useEffect, useState } from "react";
import { Message } from "./components/Message/Message";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";
import "./App.css";

export const App = (props) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  let chatRooms = [
    { id: 1, name: "Denis" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Maxim" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Kate" },
  ];

  const handleChange = useCallback((text) => {
    setMessageText(text);
  }, []);

  const pushMessage = useCallback(() => {
    let msg = {
      id: messages.length + 1,
      author: "Denis",
      text: messageText,
    };
    setMessages([...messages, msg]);
    setMessageText("");
  }, [messages, messageText]);

  useEffect(() => {
    setTimeout(() => {
      if (messages.length === 0) {
        return messages;
      } else if (messages[messages.length - 1].author === "Denis") {
        let msg = {
          id: messages.length + 1,
          author: "Bot",
          text: "Привет, " + messages[0].author,
        };
        setMessages([...messages, msg]);
      }
    }, 2000);
  }, [messages]);

  return (
    <div className="wrapper">
      <ChatRoom chatRooms={chatRooms} />
      <Message
        messages={messages}
        pushMessage={pushMessage}
        handleChange={handleChange}
        messageText={messageText}
      />
    </div>
  );
};
