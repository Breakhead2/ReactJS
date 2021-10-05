import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { MyThemeContext } from "../../App";
import { useContext } from "react";

export const Messanger = ({ value, handleChange, chats, addMessage }) => {
  const theme = useTheme();
  const { lightThemeKey } = useContext(MyThemeContext);

  const { chatsId } = useParams();

  let chatFinder = chats.find((item) => item.id === chatsId);

  if (!chatFinder) {
    return (
      <div>
        <NotFound text="Чат не найден" />
      </div>
    );
  }

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <MessageList messages={chatFinder.messages} />
      <MessageForm
        chatFinderId={chatFinder.id}
        value={value}
        handleChange={handleChange}
        addMessage={addMessage}
      />
    </div>
  );
};
