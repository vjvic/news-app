import { ActionTypes } from "Redux/constants/action-types";

const initialState = {
  countries: [],
  country: "",
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COUNTRIES:
      return { ...state, countries: payload };
    case ActionTypes.SELECT_COUNTRY:
      return { ...state, country: payload };
    default:
      return state;
  }
};
