import rootReducer from './reducers';

import { createStore, applyMiddleware, compose } from "redux";
// import { AllReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
