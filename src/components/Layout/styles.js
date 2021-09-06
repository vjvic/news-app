import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F8F9FA",
    minHeight: "100vh",
  },

  toolbar: theme.mixins.toolbar,
}));
