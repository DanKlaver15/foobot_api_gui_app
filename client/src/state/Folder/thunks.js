import axios from "axios";
import { authHeader } from "../../helpers/authHeader";

import {
  foldersInProgress,
  foldersInFailure,
  foldersInSuccess,
  updateFolders,
  deleteFolder,
} from "./actions";

export const getFolders = (userId) => async (dispatch, getState) => {
  dispatch(foldersInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}/folders`,
      { headers: authHeader() }
    );

    const folders = await response.data;

    dispatch(foldersInSuccess());
    dispatch(updateFolders(folders));
  } catch (err) {
    console.log(err);
    dispatch(foldersInFailure());
  }
};

export const removeFolder = (folderId) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/folders/${folderId}`,
      { headers: authHeader() }
    );
    console.log(response);
    dispatch(deleteFolder(response.data));
  } catch (err) {
    console.log(err);
  }
};
