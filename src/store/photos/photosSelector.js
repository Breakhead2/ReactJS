export const getData = (state) => {
  return state.photos.data[0];
};
export const loading = (state) => {
  return state.photos.isLoading;
};
export const error = (state) => {
  return state.photos.isError;
};
