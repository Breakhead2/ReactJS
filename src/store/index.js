import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/profileReducer";
import { themeReducer } from "./theme/themeReducer";
import { messangerReducer } from "./messanger/messangerReducer";
import { chatReducer } from "./chat/chatReducer";
import { photosReducer } from "./photos/photosReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root1",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  messanger: messangerReducer,
  theme: themeReducer,
  photos: photosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
