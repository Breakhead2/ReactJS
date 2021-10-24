import React from "react";
import { Navigator } from "./Components/Navigator/Navigator";
import "./App.css";
import { Provider } from "react-redux";
import { store /*persistor*/ } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import { CircularProgress } from "@material-ui/core";
import { Routes } from "./Components/Routes/Routes";

export const App = (props) => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={<CircularProgress />}> */}
      <div className="wrapper">
        <div className="left_column">
          <Navigator />
        </div>
        <div className="content">
          <Routes />
        </div>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
};
