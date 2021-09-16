import { ActionTypes } from "Redux/constants/action-types";

//open snackbar
export const openSnackbar = () => {
  return {
    type: ActionTypes.OPEN_SNACKBAR,
  };
};

//close snackbar
export const closeSnackbar = () => {
  return {
    type: ActionTypes.CLOSE_SNACKBAR,
  };
};
