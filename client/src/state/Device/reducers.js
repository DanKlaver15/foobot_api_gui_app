import {
  DEVICES_IN_PROGRESS,
  DEVICES_IN_FAILURE,
  DEVICES_IN_SUCCESS,
  ADD_DEVICE,
  UPDATE_DEVICE,
  DELETE_DEVICE,
} from "./actions";

export const devicesLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case DEVICES_IN_PROGRESS: {
      return true;
    }
    case DEVICES_IN_FAILURE: {
      return false;
    }
    case DEVICES_IN_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const device = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DEVICE: {
      const { device } = payload;
      return device;
    }
    case ADD_DEVICE: {
      const { device } = payload;
      return state;
    }
    case DELETE_DEVICE: {
      const { deviceId } = payload;
      console.log("removing...", deviceId);
      return [];
    }
    default:
      return state;
  }
};
const deviceReducers = {
  device,
  devicesLoading,
};

export default deviceReducers;
