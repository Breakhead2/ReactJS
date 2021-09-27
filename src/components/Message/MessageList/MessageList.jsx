import style from "./MessageList.module.css";
import { MessageItem } from "./MessageItem/MessageItem";

export const MessageList = (props) => {
  let messages = props.messages.map((message) => (
    <MessageItem author={message.author} text={message.text} />
  ));
  return <div className={style.list}>{messages}</div>;
};
