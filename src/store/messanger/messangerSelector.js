export const chatSelector = (state) => {
  return state.messanger.chats;
};

export const messageValue = (state) => {
  return state.messanger.messageText;
};
