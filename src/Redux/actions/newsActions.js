import newsApi from "components/apis/newsApi";
import { ActionTypes } from "Redux/constants/action-types";

const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY,
  "x-rapidapi-host": "free-news.p.rapidapi.com",
};

//fetch latest news

export const fetchNews = (counrty, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });

  const response = await newsApi.get("/latest_headlines", {
    params: { countries: counrty, lang: "en", page, page_size: "12" },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: response.data });
  dispatch({ type: ActionTypes.END_LOADING });
};

//fetch news by category

export const fetchCategories = (value, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });

  const response = await newsApi.get("/latest_headlines", {
    params: {
      countries: country,
      topic: value,
      lang: "en",
      page,
      page_size: "12",
    },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response.data });
  dispatch({ type: ActionTypes.END_LOADING });
};

//search news

export const searchNews = (query, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });
  const response = await newsApi.get("/search", {
    params: {
      q: query,
      countries: country,
      lang: "en",
      page,
      page_size: "12",
    },
    headers,
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: response.data });
  dispatch({ type: ActionTypes.END_LOADING });
};
