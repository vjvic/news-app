import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },

  active: {
    background: "#F5F5F5",
  },

  title: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    gridGap: 10,
  },
}));
