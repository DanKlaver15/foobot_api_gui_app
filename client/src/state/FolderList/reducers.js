import {
  UPDATE_FOLDERLIST,
  GET_FOLDERLIST_IN_PROGRESS,
  GET_FOLDERLIST_SUCCESS,
  GET_FOLDERLIST_FAILURE,
} from "./actions";
import { LOGOUT } from "../User/actions";

import { ADD_FOLDER, DELETE_FOLDER, UPDATE_FOLDER } from "../Folder/actions";

export const loadingFolderList = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case GET_FOLDERLIST_IN_PROGRESS: {
      return true;
    }
    case GET_FOLDERLIST_FAILURE: {
      return false;
    }
    case GET_FOLDERLIST_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const folderList = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FOLDER: {
      const { folder } = payload;

      return [folder, ...state];
    }
    case UPDATE_FOLDER: {
      const { folder } = payload;
      return state.map((statePost) => {
        if (statePost._id === folder._id) {
          return folder;
        }
        return statePost;
      });
    }
    case DELETE_FOLDER: {
      const { folderId } = payload;
      console.log("removing...", folderId);
      return state.filter((folder) => folder._id !== folderId);
    }
    case UPDATE_FOLDERLIST: {
      const { folderList } = payload;
      return folderList;
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};
