export const authValue = (state) => {
  return state.authentication.auth;
};

export const isError = (state) => {
  return state.authentication.error;
};
