import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { useSelector, shallowEqual } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
import { chatSelector } from "../../store/messanger/messangerSelector";

export const Messanger = (props) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  const chats = useSelector(chatSelector, shallowEqual);
  console.log(chats);
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
      <MessageList chatId={chatsId} />
      <MessageForm chatId={chatsId} />
    </div>
  );
};
