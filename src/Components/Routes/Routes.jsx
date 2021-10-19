import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Chats } from "../Chats/Chats";
import { Messanger } from "./Components/Messanger/Messanger";
import { Profile } from "./Components/Profile/Profile";
import { TheCatAPI } from "./Components/TheCatAPI/TheCatAPI";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NotFound text="Чтобы перейти к чатам войдите в систему и выберите CHATS" />
        </Route>
        <Route exact path="/chats">
          <NotFound text="Выберите чат" />
          <Chats />
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
    </BrowserRouter>
  );
};
