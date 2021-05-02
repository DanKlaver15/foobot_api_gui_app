export const DATA_IN_PROGRESS = "DATA_IN_PROGRESS";
export const dataInProgress = () => ({
  type: DATA_IN_PROGRESS,
});

export const DATA_IN_FAILURE = "DATA_IN_FAILURE";
export const dataInFailure = () => ({
  type: DATA_IN_FAILURE,
});

export const DATA_IN_SUCCESS = "DATA_IN_SUCCESS";
export const dataInSuccess = () => ({
  type: DATA_IN_SUCCESS,
});

export const UPDATE_DATA = "UPDATE_DATA";
export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: { data },
});

export const DELETE_DATA = "DELETE_DATA";
export const deleteData = (data) => ({
  type: DELETE_DATA,
  payload: { data },
});
