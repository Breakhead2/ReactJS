import { refMessages } from "../../services/firebase";

export const ADD_NEW_MESSAGE = "ADD NEW MESSAGE";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const ADD_NEW_MESSAGE_LIST = "ADD NEW CHAT";
export const UPDATE_MESSAGE_LIST = "UPDATE MESSAGE LIST";

export const messangerActionNewMessage = (chatId, author = "Me", message) => {
  return {
    type: ADD_NEW_MESSAGE,
    chatId: chatId,
    author: author,
    message: message,
  };
};

export const messageActionValue = (value) => {
  return {
    type: MESSAGE_VALUE,
    value: value,
  };
};

export const messageActionNewChat = (pathId) => {
  return {
    type: ADD_NEW_MESSAGE_LIST,
    id: pathId,
  };
};

export const updateMessageList = (newMessages, chatId) => {
  debugger;
  return {
    type: UPDATE_MESSAGE_LIST,
    payload: newMessages,
    chatId: chatId,
  };
};

export const addMessageWithThunk = (chatId) => (dispatch, getState) => {
  dispatch(messangerActionNewMessage(chatId));
  let state = getState().messanger;
  let messageList = state.messageList.find((list) => list.id === chatId);
  if (messageList.messages[messageList.messages.length - 1].author !== "Bot") {
    setTimeout(() => {
      dispatch(messangerActionNewMessage(chatId, "Bot", `Hello there!`));
    }, 2000);
  }
};

const getPayloadFromSnapshot = (snapshot) => {
  const newMessages = [];
  snapshot.forEach((entry) => {
    newMessages.push(entry.val());
  });
  return newMessages;
};

export const initMessageFromFirebase = (chatId) => (dispatch, getState) => {
  refMessages.child(chatId).on("value", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    dispatch(updateMessageList(payload, chatId));
  });
};
