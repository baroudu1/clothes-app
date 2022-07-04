import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// root-reducer

import { rootReducer } from "./root.reducer";

// middleware

const middleware = [logger];

const composeEnhancers = compose(applyMiddleware(...middleware));



export const store = createStore(rootReducer, undefined, composeEnhancers);
