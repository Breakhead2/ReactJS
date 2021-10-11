import style from "./Profile.module.css";
import { useParams } from "react-router-dom";
import { useTheme, Avatar, Switch } from "@material-ui/core";
import { NotFound } from "../NotFound/NotFound";
import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { profileAction } from "../../store/profile/profileAction";
import { profileSelector } from "../../store/profile/profileSelector";
import { getThemeValue } from "../../store/theme/themeSelector";
import { chatSelector } from "../../store/chat/chatSelector";

export const Profile = (props) => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  const chats = useSelector(chatSelector, shallowEqual);

  const subscribe = useSelector(profileSelector, shallowEqual);
  const dispatch = useDispatch();

  const onSub = useCallback(() => {
    dispatch(profileAction());
  }, [dispatch]);

  const { profId } = useParams();

  let profileFinder = chats.find((item) => item.id === profId);

  if (!profileFinder) {
    return (
      <div>
        <NotFound text="Профиль не найден" />
      </div>
    );
  }
  let src = `/images/ava_${profileFinder.chatName}.jpg`;
  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <div className={style.aboutMe}>
        <Avatar
          alt={profileFinder.chatName}
          src={src}
          style={{ width: "80px", height: "80px" }}
        />
        <div
          className={style.info}
          style={{
            color: lightThemeKey
              ? theme.palette.light.text
              : theme.palette.dark.text,
          }}
        >
          <p className={style.myName}>{profileFinder.chatName}</p>
          <p>Something about me</p>
        </div>
        <div className={style.subscribe}>
          <Switch checked={subscribe} onClick={onSub} color="secondary" />
          <p
            style={{
              color: lightThemeKey
                ? theme.palette.light.text
                : theme.palette.dark.text,
            }}
          >
            {subscribe ? "Отписаться" : "Подписаться"}
          </p>
        </div>
      </div>
    </div>
  );
};
