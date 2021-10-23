import { AUTH, ERROR, USER_EMAIL, USER_PASSWORD } from "./authAction";

const initState = {
  auth: false,
  email: null,
  password: null,
  error: {
    status: false,
    message: null,
  },
};

export const authReducer = (state = initState, action) => {
  switch (action?.type) {
    case AUTH:
      return {
        ...state,
        auth: action.status,
      };
    case ERROR:
      return {
        ...state,
        error: {
          status: action.status,
          message: action.message,
        },
      };
    case USER_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
