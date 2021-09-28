import { ChatRoomItem } from "./ChatRoomItem/ChatRoomItem";
import style from "./ChatRoom.module.css";

export const ChatRoom = ({ chatRooms }) => {
  let chats = chatRooms.map((element) => {
    return <ChatRoomItem key={element.id} name={element.name} />;
  });

  return <div className={style.ChatRoomBox}>{chats}</div>;
};
