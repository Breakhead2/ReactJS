import style from "./Messanger.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";
import { useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
// import { NotFound } from "../NotFound/NotFound";
import { useSelector, shallowEqual /*useDispatch*/ } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
// import { messagerSelector } from "../../store/messanger/messangerSelector";
// import { messageActionNewChat } from "../../store/messanger/messangerAction";
// import { chatSelector } from "../../store/chat/chatSelector";
import { useCallback, useState, useEffect } from "react";
import // messageActionValue,
// addMessageWithThunk,
"../../store/messanger/messangerAction";
import { refMessages } from "../../services/firebase";

export const Messanger = (props) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  // const messages = useSelector(messagerSelector, shallowEqual);
  // const chats = useSelector(chatSelector, shallowEqual);
  const { chatsId } = useParams();

  // const dispatch = useDispatch();

  //firebase

  const [messages, setMessages] = useState([]);

  const onAddMessage = useCallback(
    (message) => {
      refMessages.child(chatsId).child(message.id).set(message);
    },
    [chatsId]
  );

  useEffect(() => {
    refMessages.child(chatsId).on("value", (snapshot) => {
      const newMessages = [];
      snapshot.forEach((entry) => {
        newMessages.push(entry.val());
      });
      setMessages(newMessages);
    });
  }, [chatsId]);

  // const newMessageList = useCallback(() => {
  //   dispatch(messageActionNewChat(chats[chats.length - 1].id));
  // }, [dispatch, chats]);

  // const onClickBtn = useCallback(() => {
  //   dispatch(addMessageWithThunk(chatsId));
  //   dispatch(messageActionValue(""));
  // }, [chatsId, dispatch]);

  // const handleKeyDown = useCallback(
  //   (e) => {
  //     if (e.key === "Enter") {
  //       onClickBtn();
  //     }
  //   },
  //   [onClickBtn]
  // );

  // let chatFinder =
  //   messages.find((item) => item.id === chatsId) || newMessageList();

  // if (!chatFinder) {
  //   return (
  //     <div>
  //       <NotFound text="Чат не найден" />
  //     </div>
  //   );
  // }

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      {/* <MessageList chatFinder={chatFinder} lightThemeKey={lightThemeKey} /> */}
      <MessageList lightThemeKey={lightThemeKey} messages={messages} />
      {/* <MessageForm
        onClickBtn={onClickBtn}
        handleKeyDown={handleKeyDown}
        lightThemeKey={lightThemeKey}
      /> */}
      <MessageForm onClickBtn={onAddMessage} lightThemeKey={lightThemeKey} />
    </div>
  );
};
