import { compose, createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import thunk from "redux-thunk";

// root-reducer

import { rootReducer } from "./root.reducer";

// middleware

const thunkMiddleware = (store) => (next) => (action) => {};

const middleware = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
