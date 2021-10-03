import { useTheme } from "@material-ui/styles";
import style from "./MessageList.module.css";

export const MessageList = ({ messages, lightTheme }) => {
  const theme = useTheme();

  let messageItems = messages.map((item) => (
    <MessageItem
      key={item.id}
      text={item.text}
      author={item.author}
      lightTheme={lightTheme}
    />
  ));

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightTheme
          ? theme.palette.light.second
          : theme.palette.dark.second,
        color: lightTheme ? theme.palette.light.text : theme.palette.dark.text,
      }}
    >
      {messageItems}
    </div>
  );
};

const MessageItem = ({ text, author, lightTheme }) => {
  const theme = useTheme();
  return (
    <div
      className={style.item}
      style={{
        backgroundColor: lightTheme
          ? theme.palette.light.main
          : theme.palette.dark.main,
        color: lightTheme ? theme.palette.light.text : theme.palette.dark.text,
      }}
    >
      <p className={style.text}>
        <span className={style.author}>{author}:&nbsp;</span>
        {text}
      </p>
    </div>
  );
};
