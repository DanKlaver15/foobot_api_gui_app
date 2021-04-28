import axios from "axios";
import { authHeader, getError } from "../../helpers/authHeader";

import {
  getFolderListInProgress,
  getFolderListSuccess,
  getFolderListFailure,
  updateFolderList,
} from "./actions";

export const getFolderListRequest = (userId) => async (dispatch, getState) => {
  dispatch(getFolderListInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}/folderList`,
      { headers: authHeader() }
    );

    const folderList = await response.data;

    dispatch(getFolderListSuccess());
    dispatch(updateFolderList(folderList));
  } catch (err) {
    dispatch(getFolderListFailure(getError(err)));
    console.log(err);
  }
};
