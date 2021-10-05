import style from "./NotFound.module.css";
import { useTheme } from "@material-ui/core";
import { useContext } from "react";
import { MyThemeContext } from "../../App";

export const NotFound = ({ text }) => {
  const theme = useTheme();
  const { lightThemeKey } = useContext(MyThemeContext);
  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <div
        className={style.message}
        style={{
          backgroundColor: lightThemeKey
            ? theme.palette.light.massageBg
            : theme.palette.dark.massageBg,
        }}
      >
        {text}
      </div>
    </div>
  );
};
