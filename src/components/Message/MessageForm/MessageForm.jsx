import React, { useCallback, useEffect, useRef } from "react";
import style from "./MessageForm.module.css";
import { TextField, Button } from "@material-ui/core";

export const MessageForm = (props) => {
  const ref = useRef(null);

  const handleChange = useCallback(
    (event) => {
      props.handleChange(event.target.value);
    },
    [props]
  );

  useEffect(() => {
    ref.current?.focus();
  });

  const handleCLick = useCallback(
    (event) => {
      event.preventDefault();
      props.pushMessage();
    },
    [props]
  );

  return (
    <div className={style.form}>
      <TextField
        id="filled-textarea"
        label="Enter your message"
        placeholder="Placeholder"
        multiline
        variant="outlined"
        onChange={handleChange}
        value={props.messageText}
        inputRef={ref}
      />
      <Button variant="contained" color="primary" onClick={handleCLick}>
        PUSH
      </Button>
    </div>
  );
};
