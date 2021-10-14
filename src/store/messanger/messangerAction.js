export const ADD_NEW_MESSAGE = "ADD NEW MESSAGE";
export const MESSAGE_VALUE = "MESSAGE VALUE";
export const ADD_NEW_MESSAGE_LIST = "ADD NEW CHAT";

export const messangerActionNewMessage = (
  chatId,
  author = "Me",
  message = null
) => {
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

export const addMessageWithThunk = (chatId) => (dispatch, getState) => {
  dispatch(messangerActionNewMessage(chatId));
  let state = getState();
  let messageList = state.messanger.messageList.find(
    (list) => list.id === chatId
  );
  if (messageList.messages[messageList.messages.length - 1].author !== "Bot") {
    setTimeout(() => {
      dispatch(messangerActionNewMessage(chatId, "Bot", `Hello there!`));
    }, 2000);
  }
};
