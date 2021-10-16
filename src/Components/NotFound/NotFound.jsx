import style from "./NotFound.module.css";
import { useTheme } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
import { Link } from "react-router-dom";

export const NotFound = ({ text }) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
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
      <div
        className={style.message}
        style={{
          backgroundColor: lightThemeKey
            ? theme.palette.light.massageBg
            : theme.palette.dark.massageBg,
          marginTop: "15px",
        }}
      >
        <Link to="/photos" style={{ textDecoration: "none", color: "white" }}>
          Или посмотрите на чудесных котят ^^
        </Link>
      </div>
    </div>
  );
};
