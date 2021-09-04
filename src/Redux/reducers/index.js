import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";

const reducers = combineReducers({
  allNews: newsReducer,
});

export default reducers;
