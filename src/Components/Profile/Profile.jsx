import style from "./Profile.module.css";
import { useParams } from "react-router-dom";
import { useTheme, Avatar } from "@material-ui/core";
import { NotFound } from "../NotFound/NotFound";
import { useContext } from "react";
import { MyThemeContext } from "../../App";

export const Profile = ({ chats }) => {
  const theme = useTheme();
  const { lightThemeKey } = useContext(MyThemeContext);

  const { profId } = useParams();

  let profileFinder = chats.find((item) => item.id === profId);

  if (!profileFinder) {
    return (
      <div>
        <NotFound text="Профиль не найден" />
      </div>
    );
  }

  let src = `/images/ava_${profileFinder.name}.jpg`;
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
          alt={profileFinder.name}
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
          <p className={style.myName}>{profileFinder.name}</p>
          <p>Something about me</p>
        </div>
      </div>
    </div>
  );
};
