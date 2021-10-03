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
import { useCallback } from "react";

export const Chats = ({ chats, lightTheme, deleteChat }) => {
  let chatItems = chats.map((item) => (
    <ChatItem
      key={item.id}
      pathId={item.id}
      name={item.name}
      lightTheme={lightTheme}
      deleteChat={deleteChat}
    />
  ));

  return <List>{chatItems}</List>;
};

const ChatItem = ({ name, lightTheme, pathId, deleteChat }) => {
  const theme = useTheme();

  let src = `/images/ava_${name}.jpg`;

  const onDeleteChat = useCallback(() => {
    deleteChat(pathId);
  }, [deleteChat, pathId]);

  return (
    <div className={style.box}>
      <Link
        exact
        to={`/chats/${pathId}`}
        style={{
          textDecoration: "none",
          color: lightTheme
            ? theme.palette.light.text
            : theme.palette.dark.text,
        }}
      >
        <ListItem style={{ cursor: "pointer" }}>
          <Link exact to={`/profile/${pathId}`}>
            <ListItemAvatar>
              <Avatar
                alt={name}
                src={src}
                style={{ width: "56px", height: "56px" }}
              />
            </ListItemAvatar>
          </Link>
          <ListItemText primary={name} style={{ marginLeft: "30px" }} />
        </ListItem>
      </Link>
      <Button
        variant="contained"
        style={{
          backgroundColor: lightTheme
            ? theme.palette.light.second
            : theme.palette.dark.second,
          color: lightTheme
            ? theme.palette.light.text
            : theme.palette.dark.text,
        }}
        onClick={onDeleteChat}
      >
        Delete Chat
      </Button>
    </div>
  );
};
