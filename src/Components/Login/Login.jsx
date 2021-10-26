import style from "./Login.module.css";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  getPass,
  getEmail,
  LoginWithFirebase,
} from "../../store/authentication/authAction";
import { authValue, isError } from "../../store/authentication/authSelector";
import { getThemeValue } from "../../store/theme/themeSelector";

export const Login = () => {
  const theme = useTheme();
  const lightThemeKey = useSelector(getThemeValue, shallowEqual);

  const { push } = useHistory();

  const dispatch = useDispatch();

  const auth = useSelector(authValue, shallowEqual);

  const handlePassChange = (e) => {
    dispatch(getPass(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(getEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginWithFirebase("login"));
    auth ? push("/chats") : push("/login");
  };
  const error = useSelector(isError, shallowEqual);

  return (
    <div
      className={style.box}
      style={{
        backgroundColor: lightThemeKey
          ? theme.palette.light.second
          : theme.palette.dark.second,
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={style.avatar}>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              fill={
                lightThemeKey
                  ? theme.palette.light.text
                  : theme.palette.dark.text
              }
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="LockOutlinedIcon"
            >
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </div>
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: lightThemeKey
                ? theme.palette.light.text
                : theme.palette.dark.text,
            }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              variant="filled"
              margin="normal"
              style={{
                backgroundColor: "#fff",
              }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              style={{
                backgroundColor: "#fff",
              }}
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassChange}
            />
            <p
              style={{
                color: lightThemeKey
                  ? theme.palette.light.text
                  : theme.palette.dark.text,
              }}
            >
              {error.status ? error.message : null}
            </p>
            <Button
              type="submit"
              fullWidth
              data-testid="btn_submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  to="/signup"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    style={{
                      color: lightThemeKey
                        ? theme.palette.light.text
                        : theme.palette.dark.text,
                      textAlign: "center",
                    }}
                  >
                    Don't have an account?
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
