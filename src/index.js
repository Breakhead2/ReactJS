import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    light: {
      main: "#fff",
      second: "#74b4e0",
      text: "#000000",
      massageBg: "#4c91bf",
    },
    dark: {
      main: "#384047",
      second: "#2c2c2f",
      text: "#ffffff",
      massageBg: "#2f343b",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
