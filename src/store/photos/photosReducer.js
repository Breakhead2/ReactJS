import { ERROR, DATA, LOADING } from "./photosAction";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const photosReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ERROR:
      return {
        ...state,
        isError: action.status,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
};
