import { UPDATE_CHAT_LIST } from "./chatAction";

const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_CHAT_LIST:
      return {
        ...state,
        chats: [...action.payload],
      };
    default:
      return state;
  }
};
