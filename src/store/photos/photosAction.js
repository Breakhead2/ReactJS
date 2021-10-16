export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const DATA = "DATA";

const API = "https://api.thecatapi.com/v1/images/search";

export const isLoading = (status) => {
  return {
    type: LOADING,
    status: status,
  };
};

export const isError = (status) => {
  return {
    type: ERROR,
    status: status,
  };
};

export const isData = (data) => {
  return {
    type: DATA,
    data: data,
  };
};

export const getPhotos = async (dispatch) => {
  dispatch(isLoading(true));
  dispatch(isData([]));
  dispatch(isError(false));
  try {
    const response = await fetch(API);
    const data = await response.json();
    dispatch(isData(data));
  } catch (error) {
    console.log(error);
    dispatch(isError(true));
  }
  dispatch(isLoading(false));
};
