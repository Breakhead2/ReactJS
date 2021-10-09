export const ADD_CHAT = "ADD CHAT";
export const REMOVE_CHAT = "REMOVE CHAT";
export const ADD_NEW_MESSAGE = "ADD NEW MESSAGE";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const BOT_ANSWEAR = "BOT ANSWEAR";

export const messangerActionAdd = (name) => {
  return {
    type: ADD_CHAT,
    name: name,
  };
};

export const messangerActionRemove = (id) => {
  return {
    type: REMOVE_CHAT,
    id: id,
  };
};

export const messangerActionNewMessage = (chatId) => {
  return {
    type: ADD_NEW_MESSAGE,
    chatId: chatId,
  };
};

export const messageActionValue = (value) => {
  return {
    type: MESSAGE_VALUE,
    value: value,
  };
};

export const botAnswear = (chatId) => {
  return {
    type: BOT_ANSWEAR,
    chatId: chatId,
  };
};
