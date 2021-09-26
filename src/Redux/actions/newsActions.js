import newsApi from "components/apis/newsApi";
import { ActionTypes } from "Redux/constants/action-types";
import request from "request/request";

//fetch latest news

export const fetchNews = (counrty, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NEWS_REQUEST });

  try {
    const { data } = await newsApi.get(request.latest, {
      params: { countries: counrty, lang: "en", page, page_size: "12" },
    });

    dispatch({ type: ActionTypes.GET_NEWS_SUCCESS, payload: data });
  } catch {
    dispatch({ type: ActionTypes.GET_NEWS_FAILURE, payload: true });
  }
};

//fetch news by category

export const fetchCategories = (value, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NEWS_REQUEST });

  try {
    const { data } = await newsApi.get(request.latest, {
      params: {
        countries: country,
        topic: value,
        lang: "en",
        page,
        page_size: "12",
      },
    });

    dispatch({ type: ActionTypes.GET_NEWS_SUCCESS, payload: data });
  } catch {
    dispatch({ type: ActionTypes.GET_NEWS_FAILURE, payload: true });
  }
};

//search news

export const searchNews = (query, country, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NEWS_REQUEST });

  const { data } = await newsApi.get(request.search, {
    params: {
      q: query,
      countries: country,
      lang: "en",
      page,
      page_size: "12",
    },
  });

  dispatch({ type: ActionTypes.GET_NEWS_SUCCESS, payload: data });
};
