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
  capitalize,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { login } from "Redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ openLogin, handleCloseLogin }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { errorText } = useSelector((state) => state.ui);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login(email, password));

      handleCloseLogin();
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Modal
      className={classes.modal}
      open={openLogin}
      onClose={handleCloseLogin}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openLogin}>
        <div className={classes.paper}>
          <Typography variant="h4" component="h2">
            Login
          </Typography>
          {errorText && (
            <Alert severity="error" className={classes.error}>
              {capitalize(errorText.replace(/_/g, " ").toLowerCase())}
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
        </div>
      </Fade>
    </Modal>
  );
};

export default Login;
