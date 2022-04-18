import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  SINGLE_BLOG_SUCCESS,
  REMOVE_SINGLE_BLOG,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: localStorage.getItem('access') ? true : false,
  user: null,
};


// **************** start blogs and comments *********************
// single blog reducer
export const singleBlogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SINGLE_BLOG_SUCCESS:
      return { ...state, ...payload };
    case REMOVE_SINGLE_BLOG:
      return {};

    default:
      return state;
  }
};

// **************** end blogs and comments *********************

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
