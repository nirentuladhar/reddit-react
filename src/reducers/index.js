import { combineReducers } from "redux";
import reducers from "./reducers";
import filters from "./filters";
import subredditReducer from "./subredditReducer";

export default combineReducers({
  // reducers,
  // filters,
  subreddit: subredditReducer
});
