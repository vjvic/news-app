import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  errorText: "",
  isSnackbar: false,
  isLogin: false,
  isSignup: false,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR:
      return { ...state, errorText: payload };
    case ActionTypes.OPEN_SNACKBAR:
      return { ...state, isSnackbar: true };
    case ActionTypes.CLOSE_SNACKBAR:
      return { ...state, isSnackbar: false };
    case ActionTypes.OPEN_LOGIN:
      return { ...state, isLogin: true };
    case ActionTypes.CLOSE_LOGIN:
      return { ...state, isLogin: false };
    case ActionTypes.OPEN_SIGNUP:
      return { ...state, isSignup: true };
    case ActionTypes.CLOSE_SIGNUP:
      return { ...state, isSignup: false };
    default:
      return state;
  }
};
