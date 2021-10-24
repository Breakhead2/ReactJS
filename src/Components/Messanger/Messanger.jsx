import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
import { useCallback, useEffect } from "react";
import { refMessages } from "../../services/firebase";
import { messagerSelector } from "../../store/messanger/messangerSelector";
import {
  initMessageFromFirebase,
  messageActionNewChat,
  addMessageWithThunk,
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

  //firebase

  const onAddMessage = useCallback(
    (message) => {
      refMessages.child(chatsId).child(message.id).set(message);
    },
    [chatsId]
  );

  useEffect(() => {
    dispatch(initMessageFromFirebase(chatsId));
  }, [chatsId, dispatch]);

  const newMessageList = useCallback(() => {
    dispatch(messageActionNewChat(chats[chats.length - 1].id));
  }, [dispatch, chats]);

  const onClickBtn = useCallback(() => {
    dispatch(addMessageWithThunk(chatsId));
    dispatch(messageActionValue(""));
  }, [chatsId, dispatch]);

  // const handleKeyDown = useCallback(
  //   (e) => {
  //     if (e.key === "Enter") {
  //       onClickBtn();
  //     }
  //   },
  //   [onClickBtn]
  // );

  let chatFinder =
    messages.find((item) => item.id === chatsId) || newMessageList();

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
