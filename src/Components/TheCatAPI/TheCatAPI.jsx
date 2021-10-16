import React, { useEffect, useCallback } from "react";
import { getPhotos } from "../../store/photos/photosAction";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData, loading, error } from "../../store/photos/photosSelector";
import { getThemeValue } from "../../store/theme/themeSelector";
import style from "./TheCatAPI.module.css";
import { useTheme } from "@material-ui/core";
import { Kitty } from "./Kitty/Kitty";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";

export const TheCatAPI = (props) => {
  const data = useSelector(getData, shallowEqual);
  const isLoading = useSelector(loading, shallowEqual);
  const isError = useSelector(error, shallowEqual);

  const theme = useTheme();
  const dispatch = useDispatch();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  const reload = useCallback(() => {
    dispatch(getPhotos);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPhotos);
  }, [dispatch]);

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      {isLoading && <Loader />}
      {isError && <Error reload={reload} />}
      {data && <Kitty url={data?.url} reload={reload} />}
    </div>
  );
};
