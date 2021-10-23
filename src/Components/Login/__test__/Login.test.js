import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { store } from "../../../store";
import { Login, handleSubmit } from "../Login";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../index";

describe("Тестирование компонента Login", () => {
  test("отработка функции onSubmit", () => {
    const onSubmit = jest.fn();

    const component = render(
      <ThemeProvider theme={theme}>
        <Provider store={store} theme={theme}>
          <Login onSubmit={handleSubmit} />
        </Provider>
      </ThemeProvider>
    );

    const submitButton = component.queryByTestId("btn_submit");

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(onSubmit).toBeCalled();
  });
});
