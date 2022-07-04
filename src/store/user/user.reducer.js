import {USER_ACTIONS_TYPES} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS_TYPES.SET_NEW_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
