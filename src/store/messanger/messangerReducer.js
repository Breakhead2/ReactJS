import { MESSAGE_VALUE, UPDATE_MESSAGE_LIST } from "./messangerAction";

const initialState = {
  messageList: [
    {
      id: "1",
      messages: [],
    },
    {
      id: "2",
      messages: [],
    },
    {
      id: "3",
      messages: [],
    },
  ],
  messageText: "",
};

export const messangerReducer = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_MESSAGE_LIST:
      let chatFinder = state.messageList.find(
        (item) => item.id === action.chatId
      );
      if (chatFinder === undefined) {
        let newMessageList = {
          id: action.chatId,
          messages: [...action.payload],
        };
        return {
          ...state,
          messageList: [...state.messageList, newMessageList],
        };
      }
      chatFinder = {
        ...chatFinder,
        messages: [...action.payload],
      };
      let newArrChats = state.messageList.map((chat) => {
        if (chat.id === chatFinder.id) {
          return chatFinder;
        } else {
          return chat;
        }
      });
      return {
        ...state,
        messageList: newArrChats,
      };
    case MESSAGE_VALUE:
      return {
        ...state,
        messageText: action.value,
      };
    default:
      return state;
  }
};
