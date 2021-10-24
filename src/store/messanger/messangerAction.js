import { refMessages } from "../../services/firebase";

export const ADD_NEW_MESSAGE = "ADD NEW MESSAGE";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const ADD_NEW_MESSAGE_LIST = "ADD NEW CHAT";
export const UPDATE_MESSAGE_LIST = "UPDATE MESSAGE LIST";
export const ADD_MESSAGE_BOT = "ADD MESSAGE BOT";

export const addMessageWithFirebase = (chatId, message) => async () => {
  refMessages.child(chatId).child(message.id).set(message);
};

export const messageActionValue = (value) => {
  return {
    type: MESSAGE_VALUE,
    value: value,
  };
};

export const addMessageBot = (pathId, author, text) => {
  return {
    type: ADD_MESSAGE_BOT,
    id: pathId,
    author: author,
    text: text,
  };
};

export const messageActionNewChat = (pathId) => {
  return {
    type: ADD_NEW_MESSAGE_LIST,
    id: pathId,
  };
};

export const updateMessageList = (newMessages, chatId) => {
  return {
    type: UPDATE_MESSAGE_LIST,
    payload: newMessages,
    chatId: chatId,
  };
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
