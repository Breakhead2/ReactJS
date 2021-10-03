import style from "./Profile.module.css";
import { useParams } from "react-router-dom";
import { useTheme, Avatar } from "@material-ui/core";
import { NotFound } from "../NotFound/NotFound";

export const Profile = ({ lightTheme, chats }) => {
  const theme = useTheme();

  const { profId } = useParams();

  let profileFinder = chats.find((item) => item.id === profId);

  if (!profileFinder) {
    return (
      <div>
        <NotFound lightTheme={lightTheme} text="Профиль не найден" />
      </div>
    );
  }

  let src = `/images/ava_${profileFinder.name}.jpg`;
  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightTheme
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
            color: lightTheme
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
