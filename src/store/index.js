import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/profileReducer";
import { themeReducer } from "./theme/themeReducer";
import { messangerReducer } from "./messanger/messangerReducer";
import { chatReducer } from "./chat/chatReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messanger: messangerReducer,
    theme: themeReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
