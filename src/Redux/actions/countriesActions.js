import countriesApi from "components/apis/countriesApi";
import { ActionTypes } from "Redux/constants/action-types";

//fetch countries

export const fetchCountries = () => async (dispatch) => {
  const { data } = await countriesApi.get("/all");

  dispatch({ type: ActionTypes.FETCH_COUNTRIES, payload: data });
};

//select country

export const selectCountry = (country) => {
  return {
    type: ActionTypes.SELECT_COUNTRY,
    payload: country,
  };
};
