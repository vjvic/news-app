import React, { useState } from "react";
import useStyles from "./styles";
import {
  Backdrop,
  Modal,
  Fade,
  TextField,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeLogin, openSignup } from "Redux/actions/uiActions";
import { login } from "Redux/actions/authActions";
import { arrangeText } from "utils/utils";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { errorText, isLogin } = useSelector((state) => state.ui);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) dispatch(login(email, password));

    setEmail("");
    setPassword("");
  };

  const handleToggle = () => {
    dispatch(closeLogin());
    dispatch(openSignup());
  };

  return (
    <Modal
      className={classes.modal}
      open={isLogin}
      onClose={() => dispatch(closeLogin())}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isLogin}>
        <div className={classes.paper}>
          <Typography variant="h5" component="h2">
            Login
          </Typography>

          {errorText && (
            <Alert severity="error" className={classes.error}>
              {arrangeText(errorText)}
            </Alert>
          )}

          <form
            className={classes.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Box py={1}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Box>

            <Box py={1}>
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                type="password"
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formBtn}
            >
              Login
            </Button>
          </form>

          <Box my={2}>
            <Typography>
              Don't have an account?{" "}
              <button className={classes.link} onClick={handleToggle}>
                Signup
              </button>
            </Typography>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default Login;
