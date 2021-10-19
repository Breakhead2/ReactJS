import React from "react";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ authenticated, ...rest }) => {
  debugger;
  return authenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
