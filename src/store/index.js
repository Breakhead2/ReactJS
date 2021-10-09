import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile/profileReducer";
import { themeReducer } from "./theme/themeReducer";
import { messangerReducer } from "./messanger/messangerReducer";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    messanger: messangerReducer,
    theme: themeReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
