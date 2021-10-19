import { List, Button } from "@material-ui/core";
import { useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getThemeValue } from "../../store/theme/themeSelector";
import { chatSelector } from "../../store/chat/chatSelector";
import { chatAddAction } from "../../store/chat/chatAction";
import style from "./Chats.module.css";
import { ChatItem } from "./ChatItem/ChatItem";
import { useTheme } from "@material-ui/styles";

export const Chats = (props) => {
  const theme = useTheme();

  const chats = useSelector(chatSelector, shallowEqual);

  const dispatch = useDispatch();

  const onAddChat = useCallback(() => {
    let name = prompt("Ввведите имя чата");
    dispatch(chatAddAction(name));
  }, [dispatch]);

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  let chatItems = chats.map((item) => (
    <ChatItem
      key={item.id}
      pathId={item.id}
      name={item.chatName}
      lightThemeKey={lightThemeKey}
    />
  ));

  return (
    <div className={style.box}>
      <div className={style.tools}>
        <Button
          variant="contained"
          size="small"
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
          onClick={onAddChat}
        >
          Add Chat
        </Button>
        <Link
          to="/photos"
          className={style.regBtn}
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          cats photo
        </Link>
      </div>
      <List>{chatItems}</List>
    </div>
  );
};
