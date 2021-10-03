import style from "./Navigator.module.css";
import { FormControlLabel, Switch, Button } from "@material-ui/core";
import { Chats } from "../Chats/Chats";
import { useTheme } from "@material-ui/styles";
import { useCallback } from "react";

export const Navigator = ({
  chats,
  handleSwitch,
  lightTheme,
  deleteChat,
  addChat,
}) => {
  const theme = useTheme();

  const onAddChat = useCallback(() => {
    let name = prompt("Ввведите имя чата");
    addChat(name);
  }, [addChat]);

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightTheme
          ? theme.palette.light.main
          : theme.palette.dark.main,
        color: lightTheme ? theme.palette.light.text : theme.palette.dark.text,
      }}
    >
      <div className={style.tools}>
        <FormControlLabel
          control={<Switch checked={lightTheme} onClick={handleSwitch} />}
          label={lightTheme ? "Light" : "Dark"}
          style={{
            paddingLeft: "20px",
            marginLeft: "0px",
          }}
        />
        <Button
          variant="outlined"
          size="small"
          style={{
            backgroundColor: lightTheme
              ? theme.palette.light.second
              : theme.palette.dark.second,
            color: lightTheme
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
          onClick={onAddChat}
        >
          Add Chat
        </Button>
      </div>

      <Chats chats={chats} lightTheme={lightTheme} deleteChat={deleteChat} />
    </div>
  );
};
