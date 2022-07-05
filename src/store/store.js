import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// root-reducer

import { rootReducer } from "./root.reducer";

// middleware

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action);
//     }
//     console.log("type:" , action.type);
//     console.log("payload:", action.payload);
//     console.log("current state:", store.getState());
//     next(action);
//     console.log("next state:", store.getState());
// }

const middleware = [logger];

const composeEnhancers = compose(applyMiddleware(...middleware));



export const store = createStore(rootReducer, undefined, composeEnhancers);
