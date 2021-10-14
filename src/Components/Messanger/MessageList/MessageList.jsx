import { useTheme } from "@material-ui/styles";
import style from "./MessageList.module.css";

export const MessageList = ({ chatFinder, lightThemeKey }) => {
  const theme = useTheme();

  let messageItems = chatFinder.messages.map((item) => (
    <MessageItem
      key={item.id}
      text={item.text}
      author={item.author}
      lightThemeKey={lightThemeKey}
    />
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

const MessageItem = ({ text, author, lightThemeKey }) => {
  const theme = useTheme();
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
