import style from "./ChatItem.module.css";
import {
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { chatRemove } from "../../../store/chat/chatAction";

export const ChatItem = ({ name, pathId, lightThemeKey }) => {
  const { push } = useHistory();
  const theme = useTheme();
  const dispatch = useDispatch();
  const onDeleteChat = useCallback(() => {
    dispatch(chatRemove(pathId));
    push("/chats");
  }, [dispatch, pathId, push]);

  let src = `https://breakhead2.github.io/images/ava_${name}.jpg`;

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
        exact="true"
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
