import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  news: [],
  loading: true,
  error: false,
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_LATEST:
      return { ...state, news: payload, loading: false };
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, news: payload, loading: false };
    case ActionTypes.SEARCH_NEWS:
      return { ...state, news: payload, loading: false };
    case ActionTypes.NEWS_LOADING:
      return { ...state, loading: true };
    case ActionTypes.NEWS_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
