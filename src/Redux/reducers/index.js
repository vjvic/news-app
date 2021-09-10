import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { countriesReducer } from "./countriesReducer";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
  allNews: newsReducer,
  countries: countriesReducer,
  auth: authReducer,
});

export default reducers;
