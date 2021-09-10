import countriesApi from "components/apis/countriesApi";
import { ActionTypes } from "Redux/constants/action-types";

//fetch countries

export const fetchCountries = () => async (dispatch) => {
  /* dispatch({ type: ActionTypes.START_LOADING }); */

  const response = await countriesApi.get("/all");

  dispatch({ type: ActionTypes.FETCH_COUNTRIES, payload: response.data });

  /*   dispatch({ type: ActionTypes.END_LOADING }); */
};

//select country

export const selectCountry = (country) => {
  return {
    type: ActionTypes.SELECT_COUNTRY,
    payload: country,
  };
};
