import {
  DATA_IN_PROGRESS,
  DATA_IN_FAILURE,
  DATA_IN_SUCCESS,
  UPDATE_DATA,
  DELETE_DATA,
} from "./actions";

export const dataLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case DATA_IN_PROGRESS: {
      return true;
    }
    case DATA_IN_FAILURE: {
      return false;
    }
    case DATA_IN_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const data = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_DATA: {
      const { data } = payload;
      return data;
    }
    case DELETE_DATA: {
      const { data } = payload;
      console.log("removing...", data);
      return [];
    }
    default:
      return state;
  }
};

const dataReducers = {
  data,
  dataLoading,
};

export default dataReducers;
