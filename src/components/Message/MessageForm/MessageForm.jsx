import React from "react";
import style from "./MessageForm.module.css";

export const MessageForm = (props) => {
  let curentValue = React.createRef();

  const onSendMessages = (event) => {
    event.preventDefault();
    props.pushMessage(curentValue.current.value);
    curentValue.current.value = "";
  };

  return (
    <form className={style.form}>
      <input className={style.inptMessage} type="text" ref={curentValue} />
      <button onClick={onSendMessages}>PUSH</button>
    </form>
  );
};
