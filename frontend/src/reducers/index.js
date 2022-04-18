import { combineReducers } from "redux";
import auth from "./auth";
import { singleBlogReducer, commentsReducer } from "./auth";

export default combineReducers({
  auth,
  blog: singleBlogReducer,
  comments: commentsReducer,
});
