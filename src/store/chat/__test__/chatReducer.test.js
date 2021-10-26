import { chatReducer, initialState } from "../chatReducer";
import { chatAddAction, chatRemoveAction } from "../chatAction";

describe("тестирование функции chatReducer", () => {
  test("вызов chatReducer без экшена вернет initialState", () => {
    const result = chatReducer();
    expect(result).toEqual(initialState);
  });

  test("добавление нового чата в chats", () => {
    const result = chatReducer(undefined, chatAddAction("Ivan"));
    expect(result.chats[result.chats.length - 1].chatName).toEqual("Ivan");
  });

  test("удаление чата в chats", () => {
    const id = "2";
    const state = chatReducer(undefined, chatRemoveAction(id));
    const result = state.chats.find((item) => item.id === id);
    expect(result).toEqual(undefined);
  });
});
