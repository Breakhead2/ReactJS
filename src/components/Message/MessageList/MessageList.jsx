import style from "./MessageList.module.css";

export const MessageList = (props) => {
  let messages = props.messages.map((message) => {
    return (
      <div className={style.item}>
        <p className={style.author}>{message.author}:</p>
        <p className={style.text}>{message.text}</p>
      </div>
    );
  });
  return <div className={style.list}>{messages}</div>;
};
