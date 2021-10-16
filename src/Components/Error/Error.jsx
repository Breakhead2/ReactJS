import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const Error = ({ reload }) => {
  const theme = useTheme();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src="/images/warning.png" alt="error" />
      <Button
        variant="outlined"
        size="small"
        style={{
          backgroundColor: theme.palette.light.main,
          color: theme.palette.light.text,
        }}
        onClick={reload}
      >
        RELOAD PAGE
      </Button>
    </div>
  );
};
