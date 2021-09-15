import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { countriesReducer } from "./countriesReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { firestoreReducer } from "./firestoreReducer";

const reducers = combineReducers({
  allNews: newsReducer,
  countries: countriesReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  ui: uiReducer,
});

export default reducers;
