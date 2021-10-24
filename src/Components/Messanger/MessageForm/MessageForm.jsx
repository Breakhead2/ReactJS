import { Button, useTheme } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import style from "./MessageForm.module.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { messageValue } from "../../../store/messanger/messangerSelector";
import { messageActionValue } from "../../../store/messanger/messangerAction";

export const MessageForm = ({ onClickBtn, handleKeyDown, lightThemeKey }) => {
  const ref = useRef(null);

  const dispatch = useDispatch();
  const theme = useTheme();

  const message = useSelector(messageValue, shallowEqual);

  // const handleChange = useCallback(() => {
  //   onClickBtn({
  //     id: `${generatorID()}`,
  //     text: ref.current.value,
  //   });
  //   ref.current.value = "";
  // }, [onClickBtn]);

  const handleChange = useCallback(() => {
    dispatch(messageActionValue(ref.current.value));
  }, [dispatch]);

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
        // onKeyDown={handleKeyDown}
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
