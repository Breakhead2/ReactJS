import React from "react";
import { StartPage } from "./Components/StartPage/StartPage";
import { Navigator } from "./Components/Navigator/Navigator";
import { Messanger } from "./Components/Messanger/Messanger";
import { NotFound } from "./Components/NotFound/NotFound";
import { Profile } from "./Components/Profile/Profile";
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
            <Route exact path="/chats/:chatsId" component={Messanger} />
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
