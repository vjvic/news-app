import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  news: [],
  loading: true,
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_LATEST:
      return { ...state, news: payload };
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, news: payload };
    case ActionTypes.SEARCH_NEWS:
      return { ...state, news: payload };
    case ActionTypes.START_LOADING:
      return { ...state, loading: payload };
    case ActionTypes.END_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
