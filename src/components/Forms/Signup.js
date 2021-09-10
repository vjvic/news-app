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
import { signup } from "Redux/actions/authActions";
import { useDispatch } from "react-redux";

const Signup = ({ openSignup, handleCloseSignup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && confirmPassword) {
      dispatch(signup(email, password));
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Modal
      className={classes.modal}
      open={openSignup}
      onClose={handleCloseSignup}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openSignup}>
        <div className={classes.paper}>
          <Typography variant="h4" component="h2">
            Signup
          </Typography>
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Box>

            <Box py={1}>
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formBtn}
            >
              Signup
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default Signup;
