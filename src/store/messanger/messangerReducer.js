import { generatorID } from "../../generators/generators";
import {
  REMOVE_CHAT,
  ADD_CHAT,
  ADD_NEW_MESSAGE,
  MESSAGE_VALUE,
  BOT_ANSWEAR,
} from "../messanger/messangerAction";

const initialState = {
  chats: [
    {
      id: "1",
      name: "Andrew",
      messages: [{ id: 1, author: "Andrew", text: "Hello, how are you?" }],
    },
    {
      id: "2",
      name: "Denis",
      messages: [{ id: 1, author: "Denis", text: "Hi! Is today all by plan?" }],
    },
    {
      id: "3",
      name: "Maxim",
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
    case ADD_CHAT:
      if (action.name === "" || action.name === undefined) {
        action.name = "Noname";
      } else if (action.name === null) {
        return state;
      }
      let chatItem = {
        id: `${generatorID()}`,
        name: action.name,
        messages: [],
      };
      for (let i = 0; i < state.chats.length; i++) {
        if (state.chats[i].id === chatItem.id) {
          chatItem.id = `${generatorID()}`;
        }
      }
      return {
        ...state,
        chats: [...state.chats, chatItem],
      };
    case REMOVE_CHAT:
      let newChats = state.chats.filter((chat) => chat.id !== action.id);
      return {
        ...state,
        chats: [...newChats],
      };
    case MESSAGE_VALUE:
      return {
        ...state,
        messageText: action.value,
      };
    case ADD_NEW_MESSAGE:
      let chatFinder = state.chats.find((item) => item.id === action.chatId);
      let messageItem = {
        id: chatFinder.messages.length + 1,
        author: "Me",
        text: state.messageText,
      };
      chatFinder = {
        ...chatFinder,
        messages: [...chatFinder.messages, messageItem],
      };
      let newArrChats = state.chats.map((chat) => {
        if (chat.id === chatFinder.id) {
          return chatFinder;
        } else {
          return chat;
        }
      });
      return {
        ...state,
        chats: [...newArrChats],
      };
    case BOT_ANSWEAR: {
      let chatFinder = state.chats.find((item) => item.id === action.chatId);
      if (chatFinder.messages[chatFinder.messages.length - 1].author === "Me") {
        let messageItem = {
          id: chatFinder.messages.length + 1,
          author: `${chatFinder.name}`,
          text: `Sorry, i'm not by computer. I'll answear you a little bit later :)`,
        };
        chatFinder = {
          ...chatFinder,
          messages: [...chatFinder.messages, messageItem],
        };
        let newArrChats = state.chats.map((chat) => {
          if (chat.id === chatFinder.id) {
            return chatFinder;
          } else {
            return chat;
          }
        });
        return {
          ...state,
          chats: [...newArrChats],
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};
