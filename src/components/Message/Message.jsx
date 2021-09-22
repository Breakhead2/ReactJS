import style from "./Message.module.css";
import { MessageList } from "./MessageList/MessageList";
import { MessageForm } from "./MessageForm/MessageForm";

export const Message = (props) => {
  return (
    <div className={style.box}>
      <MessageList messages={props.messages} />
      <MessageForm pushMessage={props.pushMessage} />
    </div>
  );
};
