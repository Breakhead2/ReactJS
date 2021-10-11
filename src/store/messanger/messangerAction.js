export const ADD_NEW_MESSAGE = "ADD NEW MESSAGE";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const ADD_NEW_MESSAGE_LIST = "ADD NEW CHAT";

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

export const messageActionNewChat = (pathId) => {
  return {
    type: ADD_NEW_MESSAGE_LIST,
    id: pathId,
  };
};
