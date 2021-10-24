import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/profileReducer";
import { themeReducer } from "./theme/themeReducer";
import { messangerReducer } from "./messanger/messangerReducer";
import { chatReducer } from "./chat/chatReducer";
import { photosReducer } from "./photos/photosReducer";
import { authReducer } from "./authentication/authReducer";
import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// import { persistReducer /*persistStore */ } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//   key: "root4",
//   storage,
// };

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  messanger: messangerReducer,
  theme: themeReducer,
  photos: photosReducer,
  authentication: authReducer,
});

// const persistedReducer = persistReducer(/*persistConfig,*/ rootReducer);

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const persistor = persistStore(store);
