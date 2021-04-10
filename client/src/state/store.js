import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {};

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
