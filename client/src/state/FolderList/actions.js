export const GET_FOLDERLIST_IN_PROGRESS = "GET_FOLDERLIST_IN_PROGRESS";
export const getFolderListInProgress = () => ({
  type: GET_FOLDERLIST_IN_PROGRESS,
});

export const GET_FOLDERLIST_SUCCESS = "GET_FOLDERLIST_SUCCESS";
export const getFolderListSuccess = () => ({
  type: GET_FOLDERLIST_SUCCESS,
});

export const GET_FOLDERLIST_FAILURE = "GET_FOLDERLIST_FAILURE";
export const getFolderListFailure = (error) => ({
  type: GET_FOLDERLIST_FAILURE,
  payload: { error },
});

export const UPDATE_FOLDERLIST = "UPDATE_FOLDERLIST";
export const updateFolderList = (folderList) => ({
  type: UPDATE_FOLDERLIST,
  payload: { folderList },
});
