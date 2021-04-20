import {
  FOLDERS_IN_PROGRESS,
  FOLDERS_IN_FAILURE,
  FOLDERS_IN_SUCCESS,
  ADD_FOLDER,
  UPDATE_FOLDERS,
  DELETE_FOLDER,
} from "./actions";

export const foldersLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case FOLDERS_IN_PROGRESS: {
      return true;
    }
    case FOLDERS_IN_FAILURE: {
      return false;
    }
    case FOLDERS_IN_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const folders = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FOLDERS: {
      const { folders } = payload;
      return folders;
    }
    case ADD_FOLDER: {
      const { folder } = payload;
      return [...state, folder];
    }
    case DELETE_FOLDER: {
      const { folderId } = payload;
      return state.filter((folder) => folder._id === folderId);
    }
    default:
      return state;
  }
};
const folderReducers = {
  folders,
  foldersLoading,
};

export default folderReducers;
