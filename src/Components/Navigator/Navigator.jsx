import style from "./Navigator.module.css";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Chats } from "../Chats/Chats";
import { useTheme } from "@material-ui/styles";
import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { themeAction } from "../../store/theme/themeAction";
import { getThemeValue } from "../../store/theme/themeSelector";
import { Link, Route, Switch as RouterSwitch } from "react-router-dom";

export const Navigator = (props) => {
  const theme = useTheme();

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  const dispatch = useDispatch();

  const handleSwitch = useCallback(() => {
    dispatch(themeAction());
  }, [dispatch]);

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.main
          : theme.palette.dark.main,
        color: lightThemeKey
          ? theme.palette.light.text
          : theme.palette.dark.text,
      }}
    >
      <div className={style.tools}>
        <Link
          to="/"
          className={style.regBtn}
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z" />
          </svg>
        </Link>
        <FormControlLabel
          control={<Switch onClick={handleSwitch} />}
          label={lightThemeKey ? "Light" : "Dark"}
          style={{
            paddingLeft: "20px",
            marginLeft: "0px",
          }}
        />
        <Link
          to="/chats"
          className={style.regBtn}
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          Chats
        </Link>
        <Link
          to="/login"
          className={style.regBtn}
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={style.regBtn}
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          Sign Up
        </Link>
      </div>
      <RouterSwitch component={RouterSwitch}>
        <Route path="/chats" component={Chats} />
      </RouterSwitch>
    </div>
  );
};
