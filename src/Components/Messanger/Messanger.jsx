import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
import { useCallback, useEffect } from "react";
import { messagerSelector } from "../../store/messanger/messangerSelector";
import {
  initMessageFromFirebase,
  messageActionNewChat,
  addMessageWithFirebase,
  messageActionValue,
} from "../../store/messanger/messangerAction";
import { chatSelector } from "../../store/chat/chatSelector";

export const Messanger = (props) => {
  const theme = useTheme();

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  const messages = useSelector(messagerSelector, shallowEqual);

  const chats = useSelector(chatSelector, shallowEqual);

  const { chatsId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initMessageFromFirebase(chatsId));
  }, [chatsId, dispatch]);

  const newMessageList = useCallback(() => {
    dispatch(messageActionNewChat(chats[chats.length - 1].id));
  }, [dispatch, chats]);

  let chatFinder =
    messages.find((item) => item.id === chatsId) || newMessageList();

  const onClickBtn = useCallback(
    (text) => {
      let message = {
        id: `${chatFinder.messages.length + 1}`,
        author: "Me",
        text: text,
      };
      dispatch(addMessageWithFirebase(chatsId, message));
      dispatch(messageActionValue(""));
    },
    [chatsId, dispatch, chatFinder]
  );

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
      <MessageList chatFinder={chatFinder} lightThemeKey={lightThemeKey} />
      <MessageForm
        onClickBtn={onClickBtn}
        //handleKeyDown={handleKeyDown}
        lightThemeKey={lightThemeKey}
      />
    </div>
  );
};
