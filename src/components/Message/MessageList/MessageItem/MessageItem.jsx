import style from "./MessageItem.module.css";

export const MessageItem = (props) => {
  return (
    <div className={style.item}>
      <p className={style.author}>{props.author}:</p>
      <p className={style.text}>{props.text}</p>
    </div>
  );
};
