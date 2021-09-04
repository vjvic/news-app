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

const Appbar = ({ handleDrawerToggle }) => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      history.push(`/${query}`);
    }

    setQuery("");
  };

  return (
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
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Appbar;
