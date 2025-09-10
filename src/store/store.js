import {compose, legacy_createStore as createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer.js";

// create middleware

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares))

// we need a root-reducer (combination of all of our reducers)

export const store = createStore(rootReducer, undefined, composedEnhancers);