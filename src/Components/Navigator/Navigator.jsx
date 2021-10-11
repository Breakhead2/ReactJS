import style from "./Navigator.module.css";
import { FormControlLabel, Switch, Button } from "@material-ui/core";
import { Chats } from "../Chats/Chats";
import { useTheme } from "@material-ui/styles";
import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { themeAction } from "../../store/theme/themeAction";
import { getThemeValue } from "../../store/theme/themeSelector";
import { chatAddAction } from "../../store/chat/chatAction";

export const Navigator = (props) => {
  const theme = useTheme();

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  const dispatch = useDispatch();

  const handleSwitch = useCallback(() => {
    dispatch(themeAction());
  }, [dispatch]);

  const onAddChat = useCallback(() => {
    let name = prompt("Ввведите имя чата");
    dispatch(chatAddAction(name));
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

      <Chats />
    </div>
  );
};
