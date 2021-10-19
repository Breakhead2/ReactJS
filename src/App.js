import React from "react";
import { Navigator } from "./Components/Navigator/Navigator";
import { Messanger } from "./Components/Messanger/Messanger";
import { NotFound } from "./Components/NotFound/NotFound";
import { Profile } from "./Components/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import { TheCatAPI } from "./Components/TheCatAPI/TheCatAPI";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";

export const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <div className="wrapper">
          <div className="left_column">
            <Navigator />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <NotFound text="Чтобы перейти к чатам войдите в систему и выберите CHATS" />
              </Route>
              <Route exact path="/chats">
                <NotFound text="Выберите чат" />
              </Route>
              <Route exact path="/chats/:chatsId" component={Messanger} />
              <Route exact path="/profile/:profId" component={Profile} />
              <Route exact path="/photos" component={TheCatAPI} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route
                path="*"
                render={() => <NotFound text="Страница не найдена" />}
              />
            </Switch>
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};
