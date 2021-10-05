import style from "./Navigator.module.css";
import { FormControlLabel, Switch, Button } from "@material-ui/core";
import { Chats } from "../Chats/Chats";
import { useTheme } from "@material-ui/styles";
import { useCallback, useContext } from "react";
import { MyThemeContext } from "../../App";

export const Navigator = ({ chats, handleSwitch, addChat }) => {
  const theme = useTheme();

  const { lightThemeKey } = useContext(MyThemeContext);

  const onAddChat = useCallback(() => {
    let name = prompt("Ввведите имя чата");
    addChat(name);
  }, [addChat]);

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
        <FormControlLabel
          control={<Switch onClick={handleSwitch} />}
          label={lightThemeKey ? "Light" : "Dark"}
          style={{
            paddingLeft: "20px",
            marginLeft: "0px",
          }}
        />
        <Button
          variant="outlined"
          size="small"
          style={{
            backgroundColor: lightThemeKey
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
          onClick={onAddChat}
        >
          Add Chat
        </Button>
      </div>

      <Chats chats={chats} />
    </div>
  );
};
