import { ThemeProvider } from "@material-ui/core";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFound } from "../NotFound";
import { Provider } from "react-redux";
import { theme } from "../../../index";
import { store } from "../../../store";

describe("Тестирование презентационного компонента NotFound", () => {
  test("Получение пропса text", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <NotFound text={"test"} />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );
    const result = component.queryByTestId("test_props_text");
    expect(result.textContent).toBe("test");
  });
});
