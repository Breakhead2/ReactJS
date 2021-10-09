import { Button, useTheme } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import style from "./MessageForm.module.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getThemeValue } from "../../../store/theme/themeSelector";
import { messageValue } from "../../../store/messanger/messangerSelector";
import {
  messageActionValue,
  messangerActionNewMessage,
} from "../../../store/messanger/messangerAction";

export const MessageForm = ({ chatId }) => {
  const ref = useRef(null);

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);
  const dispatch = useDispatch();
  const theme = useTheme();

  const message = useSelector(messageValue, shallowEqual);

  const handleChange = useCallback(() => {
    dispatch(messageActionValue(ref.current.value));
  }, [dispatch]);

  const onClickBtn = useCallback(() => {
    dispatch(messangerActionNewMessage(chatId));
    dispatch(messageActionValue(""));
  }, [chatId, dispatch]);

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
        value={message}
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
