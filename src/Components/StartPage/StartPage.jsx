import style from "./StartPage.module.css";
import { useTheme } from "@material-ui/core";

export const StartPage = ({ lightTheme }) => {
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
        Выберите чат
      </div>
    </div>
  );
};
