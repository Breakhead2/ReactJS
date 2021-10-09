import { SWITCH_THEME } from "./themeAction";

const initialState = {
  currentLightTheme: true,
};

export const themeReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SWITCH_THEME:
      return {
        ...state,
        currentLightTheme: !state.currentLightTheme,
      };
    default:
      return state;
  }
};
