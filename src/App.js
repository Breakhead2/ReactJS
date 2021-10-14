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

export const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <div className="wrapper">
          <Navigator />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <NotFound text="Выберите чат" />
              </Route>
              <Route exact path="/chats/:chatsId" component={Messanger} />
              <Route exact path="/profile/:profId" component={Profile} />
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
