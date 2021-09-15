import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - 250px)`,
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
