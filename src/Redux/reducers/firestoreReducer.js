import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  savedNews: [],
  loading: true,
};

export const firestoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SAVED_NEWS:
      return { ...state, savedNews: payload };
    case ActionTypes.START_LOADING:
      return { ...state, loading: true };
    case ActionTypes.END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
