import style from "./Chats.module.css";
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { MyThemeContext } from "../../App";

export const Chats = ({ chats, deleteChat }) => {
  let chatItems = chats.map((item) => (
    <ChatItem key={item.id} pathId={item.id} name={item.name} />
  ));

  return <List>{chatItems}</List>;
};

const ChatItem = ({ name, pathId, deleteChat }) => {
  const { lightThemeKey, fnRemoveChat } = useContext(MyThemeContext);

  const theme = useTheme();

  let src = `/images/ava_${name}.jpg`;

  const onDeleteChat = useCallback(() => {
    fnRemoveChat(pathId);
  }, [fnRemoveChat, pathId]);

  return (
    <div className={style.box}>
      <Link componentclass="span" exact to={`/profile/${pathId}`}>
        <ListItemAvatar>
          <Avatar
            alt={name}
            src={src}
            style={{ width: "56px", height: "56px", marginLeft: "20px" }}
          />
        </ListItemAvatar>
      </Link>
      <Link
        exact
        to={`/chats/${pathId}`}
        style={{
          textDecoration: "none",
          color: lightThemeKey
            ? theme.palette.light.text
            : theme.palette.dark.text,
        }}
      >
        <ListItem style={{ cursor: "pointer" }}>
          <ListItemText primary={name} style={{ marginLeft: "30px" }} />
        </ListItem>
      </Link>
      <Button
        variant="contained"
        style={{
          backgroundColor: lightThemeKey
            ? theme.palette.light.second
            : theme.palette.dark.second,
          color: lightThemeKey
            ? theme.palette.light.text
            : theme.palette.dark.text,
          marginRight: "20px",
        }}
        onClick={onDeleteChat}
      >
        Delete Chat
      </Button>
    </div>
  );
};
