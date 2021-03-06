import React from "react";
import { Redirect, Route } from "react-router";

export const PublicRoute = ({ authenticated, ...rest }) => {
  return !authenticated ? <Route {...rest} /> : <Redirect to="/chats" />;
};
