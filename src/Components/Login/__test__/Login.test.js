import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "../Login";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { store } from "../../../store";
import { theme } from "../../../index";

describe("Тестирование компонета Login", () => {
  test("Отработка submit формы", () => {
    const getPass = jest.fn();
    const component = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Login />
        </Provider>
      </ThemeProvider>
    );
    const btn_submit = component.queryByTestId("btn_submit");
    act(() => {
      fireEvent.click(btn_submit);
    });
    expect(getPass).toBeCalled();
  });
});
