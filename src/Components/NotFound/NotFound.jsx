import style from "./NotFound.module.css";
import { useTheme } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";

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
          color: theme.palette.dark.text,
        }}
      >
        {text}
      </div>
    </div>
  );
};
