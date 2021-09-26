import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  news: [],
  loading: true,
  error: false,
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NEWS_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.GET_NEWS_SUCCESS:
      return { ...state, news: payload, loading: false };
    case ActionTypes.GET_NEWS_FAILURE:
      return { ...state, news: [], loading: false, error: payload };
    default:
      return state;
  }
};
