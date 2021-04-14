import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_AVATAR_FAILURE,
  UPDATE_AVATAR_SUCCESS,
} from "../User/actions";

export const error = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER_FAILURE: {
      const { error } = payload;
      state.updateUser = { error: true, message: error };
      return state;
    }
    case UPDATE_USER_SUCCESS: {
      state.updateUser = { error: false, message: "" };
      return state;
    }
    case UPDATE_AVATAR_FAILURE: {
      const { error } = payload;
      state.updateAvatar = { error: true, message: error };
      return state;
    }
    case UPDATE_AVATAR_SUCCESS: {
      state.updateAvatar = { error: false, message: "" };
      return state;
    }
    default:
      return state;
  }
};
