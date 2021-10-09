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
