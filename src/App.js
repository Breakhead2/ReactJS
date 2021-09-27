import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Message } from "./components/Message/Message";

export const App = (props) => {
  const [messages, setMessages] = useState([]);

  const pushMessage = useCallback(
    (text) => {
      let msg = {
        id: messages.length + 1,
        author: "Denis",
        text: text,
      };
      setMessages([...messages, msg]);
    },
    [messages]
  );

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
        return setMessages([...messages, msg]);
      }
    }, 2000);
  }, [messages]);

  return (
    <div className="wrapper">
      <Message messages={messages} pushMessage={pushMessage} />
    </div>
  );
};
