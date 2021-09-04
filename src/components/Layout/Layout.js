import React, { useState } from "react";
import Appbar from "components/Appbar/Appbar";
import Nav from "components/Nav/Nav";
import useStyles from "./styles";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
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
  );
};

export default Layout;
