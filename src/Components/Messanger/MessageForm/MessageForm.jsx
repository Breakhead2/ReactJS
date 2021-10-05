import { Button, useTheme } from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useContext } from "react";
import style from "./MessageForm.module.css";
import { MyThemeContext } from "../../../App";

export const MessageForm = ({
  value,
  addMessage,
  handleChange,
  chatFinderId,
}) => {
  const ref = useRef(null);

  const { lightThemeKey, fnGetcurrentId } = useContext(MyThemeContext);

  const theme = useTheme();

  const onClickBtn = useCallback(() => {
    addMessage(chatFinderId);
    fnGetcurrentId(chatFinderId);
  }, [chatFinderId, addMessage, fnGetcurrentId]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onClickBtn();
      }
    },
    [onClickBtn]
  );

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <div className={style.box}>
      <input
        id="fullWidth"
        className={style.customInput}
        style={{
          backgroundColor: lightThemeKey
            ? theme.palette.light.main
            : theme.palette.dark.main,
          color: lightThemeKey
            ? theme.palette.light.text
            : theme.palette.dark.text,
        }}
        value={value}
        ref={ref}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="outlined"
        size="small"
        onClick={onClickBtn}
        style={{
          backgroundColor: theme.palette.light.main,
          color: theme.palette.light.text,
        }}
      >
        SEND
      </Button>
    </div>
  );
};
