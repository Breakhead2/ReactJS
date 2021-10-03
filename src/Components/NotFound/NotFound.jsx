import style from "./NotFound.module.css";
import { useTheme } from "@material-ui/core";

export const NotFound = ({ lightTheme, text }) => {
  const theme = useTheme();
  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightTheme
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <div
        className={style.message}
        style={{
          backgroundColor: lightTheme
            ? theme.palette.light.massageBg
            : theme.palette.dark.massageBg,
        }}
      >
        {text}
      </div>
    </div>
  );
};
