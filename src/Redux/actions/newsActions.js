import newsApi from "components/apis/newsApi";
import { ActionTypes } from "Redux/constants/action-types";

//fetch latest news

export const fetchNews = (counrty, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.NEWS_LOADING });

  const { data } = await newsApi.get("/latest_headlines", {
    params: { countries: counrty, lang: "en", page, page_size: "12" },
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: data });
};

//fetch news by category

export const fetchCategories = (value, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.NEWS_LOADING });

  const { data } = await newsApi.get("/latest_headlines", {
    params: {
      countries: country,
      topic: value,
      lang: "en",
      page,
      page_size: "12",
    },
  });

  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: data });
};

//search news

export const searchNews = (query, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.NEWS_LOADING });
  const { data } = await newsApi.get("/search", {
    params: {
      q: query,
      countries: country,
      lang: "en",
      page,
      page_size: "12",
    },
  });

  dispatch({ type: ActionTypes.FETCH_LATEST, payload: data });
};
