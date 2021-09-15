import React, { useState } from "react";
import Appbar from "components/Appbar/Appbar";
import Nav from "components/Nav/Nav";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "Redux/actions/uiActions";

const Layout = ({ children }) => {
  const classes = useStyles();

  const { isSnackbar } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Snackbar
        open={isSnackbar}
        autoHideDuration={2000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert severity="success">successfully added!</Alert>
      </Snackbar>
      <div className={classes.root}>
        {/* app bar */}

        <Appbar handleDrawerToggle={handleDrawerToggle} />

        {/*side drawer*/}

        <Nav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

        {/*  main content */}

        <Container maxWidth="xl">
          <main>
            <div className={classes.toolbar} />
            {children}
          </main>
        </Container>
      </div>
    </>
  );
};

export default Layout;
