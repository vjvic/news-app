import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  countries: [],
  country: "",
  loading: true,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COUNTRIES:
      return { ...state, countries: payload };
    case ActionTypes.SELECT_COUNTRY:
      return { ...state, country: payload };
    case ActionTypes.START_LOADING:
      return { ...state, loading: true };
    case ActionTypes.END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
