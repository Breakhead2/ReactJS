import { useTheme } from "@material-ui/styles";
import style from "./MessageList.module.css";
import { useSelector, shallowEqual } from "react-redux";
import { getThemeValue } from "../../../store/theme/themeSelector";
import { chatSelector } from "../../../store/messanger/messangerSelector";

export const MessageList = ({ chatId }) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  const chats = useSelector(chatSelector, shallowEqual);

  let chatFind = chats.find((chat) => chat.id === chatId);

  let messageItems = chatFind.messages.map((item) => (
    <MessageItem key={item.id} text={item.text} author={item.author} />
  ));

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
        color: lightThemeKey
          ? theme.palette.light.text
          : theme.palette.dark.text,
      }}
    >
      {messageItems}
    </div>
  );
};

const MessageItem = ({ text, author }) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  return (
    <div
      className={style.item}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.main
          : theme.palette.dark.main,
        color: lightThemeKey
          ? theme.palette.light.text
          : theme.palette.dark.text,
      }}
    >
      <p className={style.text}>
        <span className={style.author}>{author}:&nbsp;</span>
        {text}
      </p>
    </div>
  );
};
