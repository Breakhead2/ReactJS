import React from "react";
import { Redirect, Route } from "react-router";

export const priviteRoute = ({ authenticated, ...rest }) => {
  return authenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
