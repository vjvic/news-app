import { ActionTypes } from "Redux/constants/action-types";

const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  currentUser: "",
  loading: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TOKEN:
      return { ...state, token: payload, loading: false };
    case ActionTypes.SET_USER:
      return { ...state, currentUser: payload, loading: false };
    case ActionTypes.USER_LOGOUT:
      return { ...state, token: "", currentUser: "" };
    case ActionTypes.USER_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
