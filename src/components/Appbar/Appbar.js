import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Divider,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
import Login from "components/Forms/Login";
import Signup from "components/Forms/Signup";
import { useSelector, useDispatch } from "react-redux";
import { openLogin, openSignup } from "Redux/actions/uiActions";

const Appbar = ({ handleDrawerToggle }) => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.auth);

  //submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      history.push(`/results/${query}`);
    }

    setQuery("");
  };

  const btn = (
    <div className={classes.btnWrapper}>
      {/* login button */}
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(openLogin())}
      >
        Login
      </Button>

      {/* signup button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(openSignup())}
      >
        Signup
      </Button>
    </div>
  );

  return (
    <>
      {/*  login */}
      <Login />

      {/*  signup */}
      <Signup />

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

          {loading ? (
            <CircularProgress />
          ) : currentUser ? (
            <Typography component="p">
              Welcome <strong>{currentUser[0].displayName}</strong>
            </Typography>
          ) : (
            btn
          )}
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default Appbar;
