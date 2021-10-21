import { auth } from "../../services/firebase";

export const AUTH = "AUTH";
export const ERROR = "ERROR";
export const USER_DATA = "USER DATA";

export const authentication = (status) => {
  return {
    type: AUTH,
    status,
  };
};

export const isError = (status, message) => {
  return {
    type: ERROR,
    status,
    message,
  };
};

export const userData = (email, pass) => {
  return {
    type: USER_DATA,
    email,
    pass,
  };
};

export const authWithFirebase = (mail, pass) => async (dispatch, getState) => {
  dispatch(authentication(false));
  dispatch(isError(false));
  dispatch(userData(mail, pass));
  let { email, password } = getState().authentication;
  debugger;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    dispatch(authentication(true));
    console.log(getState().authentication);
  } catch (error) {
    dispatch(isError(true, error));
  }
};
