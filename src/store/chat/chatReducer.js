import { generatorID } from "../../generators/generators";
import { ADD_CHAT, REMOVE_CHAT } from "./chatAction";

const initialState = {
  chats: [
    {
      id: "1",
      chatName: "Andrew",
    },
    {
      id: "2",
      chatName: "Denis",
    },
    {
      id: "3",
      chatName: "Maxim",
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_CHAT:
      if (action.name === "" || action.name === undefined) {
        action.name = "Noname";
      } else if (action.name === null) {
        return state;
      }
      let chatItem = {
        id: `${generatorID()}`,
        chatName: action.name,
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
        chats: newChats,
      };
    default:
      return state;
  }
};
