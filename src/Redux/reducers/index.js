import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { countriesReducer } from "./countriesReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  allNews: newsReducer,
  countries: countriesReducer,
  auth: authReducer,
  ui: uiReducer,
});

export default reducers;
