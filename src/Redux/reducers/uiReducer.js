import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  errorText: "",
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR:
      return { ...state, errorText: payload };
    default:
      return state;
  }
};
