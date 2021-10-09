import React from "react";
// import { PropTypes } from "prop-types";
import { StartPage } from "./components/StartPage/StartPage";
import { Navigator } from "./components/Navigator/Navigator";
import { Messanger } from "./components/Messanger/Messanger";
import { NotFound } from "./components/NotFound/NotFound";
import { Profile } from "./components/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = (props) => {
  // Ответ БОТА

  // useEffect(() => {
  //   if (getId) {
  //     let chatFinder = chats.find((item) => item.id === getId);
  //     if (
  //       chatFinder.messages[chatFinder.messages.length - 1].author !==
  //       chatFinder.name
  //     ) {
  //       setTimeout(() => {
  //         let messageItem = {
  //           id: chatFinder.messages.length + 1,
  //           author: chatFinder.name,
  //           text: `Glad to see you`,
  //         };
  //         chatFinder.messages = [...chatFinder.messages, messageItem];
  //         chatFinder = { ...chatFinder, messages: chatFinder.messages };
  //         let newChatArr = chats.map((chat) => {
  //           if (chat.id === chatFinder.id) {
  //             var newObj = Object.assign(chat, chatFinder);
  //           } else {
  //             return chat;
  //           }
  //           return newObj;
  //         });
  //         setChats(newChatArr);
  //       }, 1500);
  //     } else {
  //       setChats(chats);
  //     }
  //   }
  // }, [chats, getId]);

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navigator />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route exact path="/chats/:chatsId" render={() => <Messanger />} />
            <Route exact path="/profile/:profId" render={() => <Profile />} />
            <Route
              path="*"
              render={() => <NotFound text="Страница не найдена" />}
            />
          </Switch>
        </div>
      </div>
    </Provider>
  );
};

//Типизация пропсов компонентов

// Navigator.propTypes = {
//   chats: PropTypes.array.isRequired,
// };
// Messanger.propTypes = {
//   value: PropTypes.string.isRequired,
//   chats: PropTypes.array.isRequired,
// };
