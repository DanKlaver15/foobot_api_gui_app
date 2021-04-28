export const FOLDERS_IN_PROGRESS = "FOLDERS_IN_PROGRESS";
export const foldersInProgress = () => ({
  type: FOLDERS_IN_PROGRESS,
});

export const FOLDERS_IN_FAILURE = "FOLDERS_IN_FAILURE";
export const foldersInFailure = () => ({
  type: FOLDERS_IN_FAILURE,
});

export const FOLDERS_IN_SUCCESS = "FOLDERS_IN_SUCCESS";
export const foldersInSuccess = () => ({
  type: FOLDERS_IN_SUCCESS,
});

export const UPDATE_FOLDER = "UPDATE_FOLDER";
export const updateFolder = (folder) => ({
  type: UPDATE_FOLDER,
  payload: { folder },
});

export const ADD_FOLDER = "ADD_FOLDER";
export const addFolder = (folder) => ({
  type: ADD_FOLDER,
  payload: { folder },
});

export const DELETE_FOLDER = "DELETE_FOLDER";
export const deleteFolder = (folderId) => ({
  type: DELETE_FOLDER,
  payload: { folderId },
});
