export const messagerSelector = (state) => {
  return state.messanger.messageList;
};

export const messageValue = (state) => {
  return state.messanger.messageText;
};
