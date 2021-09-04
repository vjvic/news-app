import React from "react";
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

const Appbar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
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

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Appbar;
