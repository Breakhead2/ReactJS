import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const Messanger = ({
  value,
  handleChange,
  lightTheme,
  chats,
  addMessage,
  getCurrentId,
}) => {
  const theme = useTheme();

  const { chatsId } = useParams();

  let chatFinder = chats.find((item) => item.id === chatsId);

  if (!chatFinder) {
    return (
      <div>
        <NotFound lightTheme={lightTheme} text="Чат не найден" />
      </div>
    );
  }

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightTheme
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <MessageList messages={chatFinder.messages} lightTheme={lightTheme} />
      <MessageForm
        chatFinderId={chatFinder.id}
        value={value}
        lightTheme={lightTheme}
        handleChange={handleChange}
        addMessage={addMessage}
        getCurrentId={getCurrentId}
      />
    </div>
  );
};
