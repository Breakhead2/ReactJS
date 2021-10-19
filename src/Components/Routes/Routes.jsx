import { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Messanger } from "../Messanger/Messanger";
import { Profile } from "../Profile/Profile";
import { TheCatAPI } from "../TheCatAPI/TheCatAPI";
import { Signup } from "../Signup/Signup";
import { Login } from "../Login/Login";
import { auth } from "../../services/firebase";
import { PublicRoute } from "../../hocs/PublicRoute";
import { PrivateRoute } from "../../hocs/PrivateRoute";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <Switch>
      <PublicRoute authenticated={authed} exact path="/">
        <NotFound text="Чтобы перейти к чатам войдите в систему" />
      </PublicRoute>
      <PrivateRoute authenticated={authed} exact path="/chats">
        <NotFound text="Выберите чат" />
      </PrivateRoute>
      <PrivateRoute authenticated={authed} exact path="/chats/:chatsId">
        <Messanger />
      </PrivateRoute>
      <PrivateRoute authenticated={authed} exact path="/profile/:profId">
        <Profile />
      </PrivateRoute>
      <PrivateRoute authenticated={authed} exact path="/photos">
        <TheCatAPI />
      </PrivateRoute>
      <PublicRoute authenticated={authed} exact path="/signup">
        <Signup />
      </PublicRoute>
      <PublicRoute authenticated={authed} exact path="/login">
        <Login />
      </PublicRoute>
      <PublicRoute authenticated={authed} path="*">
        <NotFound text="Страница не найдена" />
      </PublicRoute>
    </Switch>
  );
};
