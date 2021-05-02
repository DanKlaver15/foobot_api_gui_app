export const DEVICES_IN_PROGRESS = "DEVICES_IN_PROGRESS";
export const devicesInProgress = () => ({
  type: DEVICES_IN_PROGRESS,
});

export const DEVICES_IN_FAILURE = "DEVICES_IN_FAILURE";
export const devicesInFailure = () => ({
  type: DEVICES_IN_FAILURE,
});

export const DEVICES_IN_SUCCESS = "DEVICES_IN_SUCCESS";
export const devicesInSuccess = () => ({
  type: DEVICES_IN_SUCCESS,
});

export const UPDATE_DEVICE = "UPDATE_DEVICE";
export const updateDevice = (device) => ({
  type: UPDATE_DEVICE,
  payload: { device },
});

export const ADD_DEVICE = "ADD_DEVICE";
export const addDevice = (device) => ({
  type: ADD_DEVICE,
  payload: { device },
});

export const DELETE_DEVICE = "DELETE_DEVICE";
export const deleteDevice = (deviceId) => ({
  type: DELETE_DEVICE,
  payload: { deviceId },
});
