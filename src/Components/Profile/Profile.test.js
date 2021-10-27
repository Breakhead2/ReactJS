import { ThemeProvider } from "@material-ui/core";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { theme } from "../../index";
import { store } from "../../store";
import { Profile } from "./Profile";
import userEvent from "@testing-library/user-event";

describe("Тестирование компонента Profile", () => {
  test("Проверка отработки функции subscribe", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Profile />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
    userEvent.click(component.getByTestId("switch"));
    expect(component.getByTestId("subscribe_status")).toHaveTextContent(
      "Подписаться"
    );
  });
});
