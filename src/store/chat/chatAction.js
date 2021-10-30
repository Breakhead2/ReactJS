import { refChats } from "../../services/firebase";
import { refMessages } from "../../services/firebase";
export const REMOVE_CHAT = "REMOVE CHAT";
export const UPDATE_CHAT_LIST = "UPDATE CHAT LIST";

export const addChatWithFirebase = (chat) => async () => {
  refChats.child(chat.id).set(chat);
};

export const chatRemove = (id) => async () => {
  refChats.child(id).remove();
  refMessages.child(id).remove();
};

export const updateChats = (newChats) => {
  return {
    type: UPDATE_CHAT_LIST,
    payload: newChats,
  };
};

const getPayloadFromSnapshot = (snapshot) => {
  const newChats = [];
  snapshot.forEach((entry) => {
    newChats.push(entry.val());
  });
  return newChats;
};

export const initChatsFromFirebase = () => (dispatch) => {
  refChats.on("value", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    dispatch(updateChats(payload));
  });
};
