import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import style from "./Kitty.module.css";

export const Kitty = ({ url, reload }) => {
  const theme = useTheme();
  return (
    <div className={style.box}>
      <img src={url} alt="kitty_photos" />
      <Button
        variant="outlined"
        size="small"
        style={{
          backgroundColor: theme.palette.light.main,
          color: theme.palette.light.text,
        }}
        onClick={reload}
      >
        NEED MORE CATS
      </Button>
    </div>
  );
};
