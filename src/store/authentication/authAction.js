import { auth } from "../../services/firebase";

export const AUTH = "AUTH";
export const ERROR = "ERROR";
export const USER_EMAIL = "USER EMAIL";
export const USER_PASSWORD = "USER PASSWORD";

export const authentication = (status) => {
  return {
    type: AUTH,
    status: status,
  };
};

export const isError = (status, message) => {
  return {
    type: ERROR,
    status: status,
    message: message,
  };
};

export const getEmail = (email) => {
  return {
    type: USER_EMAIL,
    email: email,
  };
};

export const getPass = (pass) => {
  return {
    type: USER_PASSWORD,
    password: pass,
  };
};

export const LoginWithFirebase = (method) => async (dispatch, getState) => {
  dispatch(authentication(false));
  dispatch(isError(false, null));
  let { email, password } = getState().authentication;
  if (method === "login") {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(authentication(true));
    } catch (error) {
      dispatch(isError(true, error));
    }
  } else if (method === "signUp") {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      dispatch(authentication(true));
    } catch (error) {
      dispatch(isError(true, error.message));
    }
  }
};
