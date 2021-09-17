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

//open login
export const openLogin = () => {
  return {
    type: ActionTypes.OPEN_LOGIN,
  };
};

//close login
export const closeLogin = () => {
  return {
    type: ActionTypes.CLOSE_LOGIN,
  };
};

//open signup
export const openSignup = () => {
  return {
    type: ActionTypes.OPEN_SIGNUP,
  };
};

//close signup
export const closeSignup = () => {
  return {
    type: ActionTypes.CLOSE_SIGNUP,
  };
};
