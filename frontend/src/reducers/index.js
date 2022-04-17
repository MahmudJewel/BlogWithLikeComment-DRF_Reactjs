import { combineReducers } from "redux";
import auth from "./auth";
import { singleBlogReducer } from "./auth";

export default combineReducers({
    auth,
    blog: singleBlogReducer
});