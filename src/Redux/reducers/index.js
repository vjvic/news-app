import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { countriesReducer } from "./countriesReducer";

const reducers = combineReducers({
  allNews: newsReducer,
  countries: countriesReducer,
});

export default reducers;
