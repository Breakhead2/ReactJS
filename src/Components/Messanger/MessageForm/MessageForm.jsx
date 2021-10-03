import { Button, useTheme } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import style from "./MessageForm.module.css";

export const MessageForm = ({
  value,
  addMessage,
  handleChange,
  lightTheme,
  chatFinderId,
  getCurrentId,
}) => {
  const ref = useRef(null);

  const theme = useTheme();

  const onClickBtn = useCallback(() => {
    addMessage(chatFinderId);
    getCurrentId(chatFinderId);
  }, [chatFinderId, addMessage, getCurrentId]);

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
          backgroundColor: lightTheme
            ? theme.palette.light.main
            : theme.palette.dark.main,
          color: lightTheme
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
