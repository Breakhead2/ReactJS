import { List } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import { getThemeValue } from "../../store/theme/themeSelector";
import { chatSelector } from "../../store/chat/chatSelector";

import { ChatItem } from "./ChatItem/ChatItem";

export const Chats = (props) => {
  const chats = useSelector(chatSelector, shallowEqual);

  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  let chatItems = chats.map((item) => (
    <ChatItem
      key={item.id}
      pathId={item.id}
      name={item.chatName}
      lightThemeKey={lightThemeKey}
    />
  ));

  return <List>{chatItems}</List>;
};
