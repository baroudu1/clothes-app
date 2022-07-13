import { USER_ACTIONS_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  is_loading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS_TYPES.CHECK_USER_SESSION:
      return {
        ...state,
        is_loading: true,
      };
    case USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START ||
      USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START:
      console.log("sign in start");
      return {
        ...state,
        is_loading: true,
        error: null,
      };
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
      const { is_loading } = state;
      if (is_loading) {
        return {
          ...state,
          currentUser: payload,
          is_loading: false,
        };
      }
      return state;
    case USER_ACTIONS_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
        is_loading: false,
      };
    case USER_ACTIONS_TYPES.SIGN_OUT_START:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
