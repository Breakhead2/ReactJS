import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile/profileReducer";
import { themeReducer } from "./theme/themeReducer";
import { messangerReducer } from "./messanger/messangerReducer";
import { chatReducer } from "./chat/chatReducer";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messanger: messangerReducer,
    theme: themeReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
