import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./User/reducers";
import folderReducers from "./Folder/reducers";
import { folderList } from "./FolderList/reducers";
import { error } from "./Error/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = { ...userReducers, ...folderReducers, folderList, error };

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
