import { ActionTypes } from "Redux/constants/action-types";

const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  currentUser: "",
  loading: true,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TOKEN:
      return { ...state, token: payload };
    case ActionTypes.SET_USER:
      return { ...state, currentUser: payload };
    case ActionTypes.USER_LOGOUT:
      return { ...state, token: "", currentUser: "" };
    case ActionTypes.START_LOADING:
      return { ...state, loading: payload };
    case ActionTypes.END_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
