import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./User/reducers";
import folderReducers from "./Folder/reducers";
import deviceReducers from "./Device/reducers";
import dataReducers from "./Data/reducers";
import { folderList } from "./FolderList/reducers";
import { error } from "./Error/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  ...userReducers,
  ...folderReducers,
  ...deviceReducers,
  ...dataReducers,
  folderList,
  error,
};

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
