import newsApi from "components/apis/newsApi";
import { ActionTypes } from "Redux/constants/action-types";

const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY,
  "x-rapidapi-host": "free-news.p.rapidapi.com",
};

export const fetchNews = () => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });

  const response = await newsApi.get("/latest_headlines", {
    params: { countries: "ph", lang: "en", page: "1", page_size: "24" },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: response.data });

  dispatch({ type: ActionTypes.END_LOADING });
};

export const fetchCategories = (value) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });

  const response = await newsApi.get("/latest_headlines", {
    params: {
      countries: "ph",
      topic: value,
      lang: "en",
      page: "1",
      page_size: "24",
    },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
  dispatch({ type: ActionTypes.END_LOADING });
};

export const searchNews = (query) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });

  const response = await newsApi.get("/search", {
    params: {
      q: query,
      countries: "ph",
      lang: "en",
      page: "1",
      page_size: "24",
    },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: response.data });

  dispatch({ type: ActionTypes.END_LOADING });
};
