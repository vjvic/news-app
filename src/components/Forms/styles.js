import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 350,
  },

  formBtn: {
    width: "100%",
    marginTop: theme.spacing(5),
    padding: theme.spacing(1.5, 0),
  },

  form: {
    marginTop: theme.spacing(2),
    width: "100%",
  },

  error: {
    marginTop: theme.spacing(2),
  },

  link: {
    cursor: "pointer",
    border: "none",
    background: "none",
    padding: 0,
    color: theme.palette.primary.main,
  },
}));
