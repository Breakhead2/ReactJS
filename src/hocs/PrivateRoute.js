import React from "react";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ authenticated, ...rest }) => {
  return authenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
