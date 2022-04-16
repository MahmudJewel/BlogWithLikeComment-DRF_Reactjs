import axiosInstance from "../axios";
import jwt_decode from "jwt-decode";
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
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL

} from "./types";

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        var token=localStorage.getItem('access')
        var decoded = jwt_decode(token);
        // console.log('access token: ', decoded.user_id)
        dispatch({
            type: USER_LOADED_SUCCESS,
            payload: decoded.data
        });
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        const res = await axiosInstance.post(`auth/jwt/create`, body, config);
        console.log('login tries');

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const signup = (username, email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, email, password});

    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        const res = await axiosInstance.post(`auth/add-user`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const blogpost = (title, desc) => async dispatch => {
    console.log('root blogpost');
    if (localStorage.getItem('access')) {
        var token=localStorage.getItem('access')
        var decoded = jwt_decode(token);
        console.log('uid from root blogpost: ', decoded.user_id)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        var author=decoded.user_id
        const body = JSON.stringify({author, title, desc });
    
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
            const res = await axiosInstance.post(`blog/all/`, body, config);
    
            dispatch({
                type: BLOG_POST_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: BLOG_POST_FAIL
            })
        }
    } else {
        dispatch({
            type: BLOG_POST_FAIL
        });
    }

};


export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            const res = await axiosInstance.post(`/api/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};