import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  createContext,
} from "react";
import { StartPage } from "./Components/StartPage/StartPage";
import { Navigator } from "./Components/Navigator/Navigator";
import { Messanger } from "./Components/Messanger/Messanger";
import { NotFound } from "./Components/NotFound/NotFound";
import { Profile } from "./Components/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export const MyThemeContext = createContext({
  lightThemeKey: true,
  fnGetcurrentId: null,
  fnRemoveChat: null,
});

export const App = (props) => {
  const [value, setValue] = useState("");

  const chatsArr = useMemo(() => {
    return [
      {
        id: "id1",
        name: "Andrew",
        messages: [
          { id: 1, author: "Andrew", text: "Hello, how are you?" },
          { id: 2, author: "Me", text: "Hi! I'm fine! What about u?" },
        ],
      },
      {
        id: "id2",
        name: "Denis",
        messages: [{ id: 1, author: "Me", text: "Hi! Is today all by plan?" }],
      },
      {
        id: "id3",
        name: "Maxim",
        messages: [
          {
            id: 1,
            author: "Maxim",
            text: "Hello! When did you see Andrew last time? I can't find him...",
          },
        ],
      },
    ];
  }, []);

  // текущее значение темы

  const [lightTheme, setLightTheme] = useState(true);

  const handleSwitch = useCallback(() => {
    setLightTheme((lightTheme) => !lightTheme);
  }, []);

  const [chats, setChats] = useState(chatsArr);

  // получение ID

  const [getId, setGetId] = useState(null);

  const getCurrentId = useCallback((curentId) => {
    setGetId((getId) => curentId);
  }, []);

  // добавить сообщение

  const addMessage = useCallback(
    (getId) => {
      let chatFinder = chats.find((item) => item.id === getId);
      let messageItem = {
        id: chatFinder.messages.length + 1,
        author: "Me",
        text: value,
      };
      chatFinder.messages = [...chatFinder.messages, messageItem];
      chatFinder = { ...chats, messages: chatFinder.messages };
      let newChat = chats.map((chat) => {
        if (chat.id === chatFinder.id) {
          var newObj = Object.assign(chat, chatFinder);
        } else {
          return chat;
        }
        return newObj;
      });

      setChats([...newChat]);
      setValue("");
    },
    [chats, value]
  );

  // Ответ БОТА

  useEffect(() => {
    if (getId) {
      let chatFinder = chats.find((item) => item.id === getId);
      if (
        chatFinder.messages[chatFinder.messages.length - 1].author !==
        chatFinder.name
      ) {
        setTimeout(() => {
          let messageItem = {
            id: chatFinder.messages.length + 1,
            author: chatFinder.name,
            text: `Glad to see you`,
          };
          chatFinder.messages = [...chatFinder.messages, messageItem];
          chatFinder = { ...chatFinder, messages: chatFinder.messages };
          let newChatArr = chats.map((chat) => {
            if (chat.id === chatFinder.id) {
              var newObj = Object.assign(chat, chatFinder);
            } else {
              return chat;
            }
            return newObj;
          });
          setChats(newChatArr);
        }, 1500);
      } else {
        setChats(chats);
      }
    }
  }, [chats, getId]);

  // удалить чат

  const deleteChat = useCallback(
    (pathId) => {
      let newChats = chats.filter((chat) => chat.id !== pathId);
      setChats([...newChats]);
    },
    [chats]
  );

  // добавить новый чат

  const addChat = useCallback(
    (name) => {
      debugger;
      if (name === "" || name === undefined) {
        name = "Noname";
      } else if (name === null) {
        return setChats([...chats]);
      }
      let chatItem = {
        id: `id${chats.length + 1}`,
        name: name,
        messages: [],
      };
      setChats([...chats, chatItem]);
      console.log(chats);
    },
    [chats]
  );

  const handleChange = useCallback((e) => {
    setValue((value) => e.target.value);
  }, []);

  return (
    <MyThemeContext.Provider
      value={{
        lightThemeKey: lightTheme,
        fnGetcurrentId: getCurrentId,
        fnRemoveChat: deleteChat,
      }}
    >
      <div className="wrapper">
        <Navigator
          chats={chats}
          handleSwitch={handleSwitch}
          addChat={addChat}
        />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route
              exact
              path="/chats/:chatsId"
              render={() => (
                <Messanger
                  value={value}
                  handleChange={handleChange}
                  chats={chats}
                  addMessage={addMessage}
                />
              )}
            />
            <Route
              exact
              path="/profile/:profId"
              render={() => <Profile chats={chats} />}
            />
            <Route
              path="*"
              render={() => <NotFound text="Страница не найдена" />}
            />
          </Switch>
        </div>
      </div>
    </MyThemeContext.Provider>
  );
};
