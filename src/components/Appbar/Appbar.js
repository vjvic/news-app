import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
import Login from "components/Forms/Login";
import Signup from "components/Forms/Signup";
import { useSelector } from "react-redux";

const Appbar = ({ handleDrawerToggle }) => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const { currentUser } = useSelector((state) => state.auth);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  //open login
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  //close login
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  //open signup
  const handleOpenSignup = () => {
    setOpenSignup(true);
  };

  //close signup
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  //submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      history.push(`/${query}`);
    }

    setQuery("");
  };

  const btn = (
    <div className={classes.btnWrapper}>
      {/* login button */}
      <Button variant="outlined" color="primary" onClick={handleOpenLogin}>
        Login
      </Button>

      {/* signup button */}
      <Button variant="contained" color="primary" onClick={handleOpenSignup}>
        Signup
      </Button>
    </div>
  );

  return (
    <>
      {/*  login */}
      <Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} />

      {/*  signup */}
      <Signup openSignup={openSignup} handleCloseSignup={handleCloseSignup} />

      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/*  search */}
          <form onSubmit={handleSubmit} className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </form>

          <div className={classes.grow} />

          {!currentUser && btn}
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default Appbar;
