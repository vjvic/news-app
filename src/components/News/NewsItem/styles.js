import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: "100%",
  },

  media: {
    height: 200,
    objectFit: "cover",
  },

  body: {
    paddingTop: theme.spacing(2),
  },

  author: {
    paddingTop: theme.spacing(1),
  },
}));
