import {
  ADD_NEW_MESSAGE,
  MESSAGE_VALUE,
  ADD_NEW_MESSAGE_LIST,
  UPDATE_MESSAGE_LIST,
} from "./messangerAction";

const initialState = {
  messageList: [
    {
      id: "1",
      messages: [{ id: 1, author: "Andrew", text: "Hello, how are you?" }],
    },
    {
      id: "2",
      messages: [{ id: 1, author: "Denis", text: "Hi! Is today all by plan?" }],
    },
    {
      id: "3",
      messages: [
        {
          id: 1,
          author: "Maxim",
          text: "Hello! When did you see Andrew last time? I can't find him...",
        },
      ],
    },
  ],
  messageText: "",
};

export const messangerReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_NEW_MESSAGE_LIST:
      let newListItem = {
        id: action.id,
        messages: [],
      };
      return {
        ...state,
        messageList: [...state.messageList, newListItem],
      };
    case UPDATE_MESSAGE_LIST:
      debugger;
      let chatFinder = state.messageList.find(
        (item) => item.id === action.chatId
      );
      let find = chatFinder.messages.find(
        (item) => item.id === action.payload[action.payload.length - 1].id
      );
      debugger;
      if (find === undefined) {
        chatFinder = {
          ...chatFinder,
          messages: [...chatFinder.messages, ...action.payload],
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
      } else {
        return state;
      }

    case MESSAGE_VALUE:
      return {
        ...state,
        messageText: action.value,
      };
    case ADD_NEW_MESSAGE: {
      let chatFinder = state.messageList.find(
        (item) => item.id === action.chatId
      );
      let messageItem = {
        id: chatFinder.messages.length + 1,
        author: action.author,
        text: action.message || state.messageText,
      };
      chatFinder = {
        ...chatFinder,
        messages: [...chatFinder.messages, messageItem],
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
    }
    default:
      return state;
  }
};
