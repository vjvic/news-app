import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  savedNews: [],
};

export const firestoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SAVED_NEWS:
      return { ...state, savedNews: payload };
    default:
      return state;
  }
};
