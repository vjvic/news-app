import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  errorText: "",
  isSnackbar: false,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR:
      return { ...state, errorText: payload };
    case ActionTypes.OPEN_SNACKBAR:
      return { ...state, isSnackbar: true };
    case ActionTypes.CLOSE_SNACKBAR:
      return { ...state, isSnackbar: false };
    default:
      return state;
  }
};
