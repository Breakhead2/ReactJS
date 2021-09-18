import "./App.css";
import { Message } from "./components/Message/Message";

let message = {
  id: 1,
  text: "Hello World!",
};

export const App = (props) => {
  return (
    <div className="wrapper">
      <Message message={message} />
    </div>
  );
};
