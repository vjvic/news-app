import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: 400,
    margin: "auto",
  },

  media: {
    height: "100%",
    objectFit: "conatain",
  },

  body: {
    paddingTop: theme.spacing(2),
  },

  author: {
    paddingTop: theme.spacing(1),
  },

  mediaWrapper: {
    height: 200,
  },
}));
