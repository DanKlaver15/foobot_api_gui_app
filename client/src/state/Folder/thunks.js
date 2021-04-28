import axios from "axios";
import { authHeader, getError } from "../../helpers/authHeader";

import {
  foldersInProgress,
  foldersInFailure,
  foldersInSuccess,
  updateFolder,
  deleteFolder,
  addFolder,
} from "./actions";

export const updateFolderRequest = (folder) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/folders/${folder._id}`,
      folder,
      {
        headers: authHeader(),
      }
    );

    const data = await response.data;

    dispatch(updateFolder(data));
  } catch (err) {
    console.log(err);
    dispatch(foldersInFailure());
  }
};

export const addFolderRequest = (folder) => async (dispatch, getState) => {
  dispatch(foldersInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/folders`,
      folder,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(foldersInSuccess());
    dispatch(addFolder(data));
  } catch (err) {
    console.log(err);

    dispatch(foldersInFailure(getError(err)));
  }
};

export const deleteFolderRequest = (folderId) => async (dispatch, getState) => {
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
