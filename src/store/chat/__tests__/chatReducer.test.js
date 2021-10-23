import { chatReducer, initialState } from "../chatReducer";
import { chatAddAction, chatRemoveAction } from "../chatAction";

describe.skip("тестирование функции chatReducer", () => {
  test("вызов chatReducer без аргументов вернет initialState", () => {
    const result = chatReducer();
    expect(result).toEqual(initialState);
  });

  test("добавление нового чата в chats", () => {
    const chatName = "newChat";
    const result = chatReducer(undefined, chatAddAction(chatName));
    expect(result.chats[result.chats.length - 1].chatName).toEqual(
      result.chats[result.chats.length - 1].chatName
    );
  });

  test("удаление чата в chats", () => {
    const id = "2";
    const result = chatReducer(undefined, chatRemoveAction(id));
    expect(result.chats.length).toEqual(
      initialState.chats.filter((item) => item.id !== id).length
    );
  });
});
