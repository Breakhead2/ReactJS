import { SUBSCRIBE } from "./profileAction";

const initialState = {
  subscribe: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SUBSCRIBE:
      return {
        ...state,
        subscribe: !state.subscribe,
      };
    default:
      return state;
  }
};
