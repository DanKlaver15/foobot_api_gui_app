import axios from "axios";
import { authHeader, getError } from "../../helpers/authHeader";

import { devicesInProgress, updateDevice, deleteDevice } from "./actions";

export const updateDeviceRequest = (device) => async (dispatch, getState) => {
  dispatch(devicesInProgress);
  dispatch(updateDevice(device));
};

export const deleteDeviceRequest = (deviceId) => async (dispatch, getState) => {
  dispatch(deleteDevice(deviceId));
};
