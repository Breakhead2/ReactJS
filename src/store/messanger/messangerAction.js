import { refMessages } from "../../services/firebase";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const UPDATE_MESSAGE_LIST = "UPDATE MESSAGE LIST";

export const addMessageWithFirebase = (chatId, message) => async () => {
  refMessages.child(chatId).child(message.id).set(message);
};

export const messageActionValue = (value) => {
  return {
    type: MESSAGE_VALUE,
    value: value,
  };
};

export const messageActionNewChat = (pathId) => async () => {
  refMessages.child(pathId);
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
