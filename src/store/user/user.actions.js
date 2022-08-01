import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTIONS_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTIONS_TYPES.SET_NEW_USER, user);
};
export const setCheckUserSession = () => {
  return createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);
};

export const setGoogleSignInStart = () => {
  return createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);
};
export const setEmailSignInStart = (email, password) => {
  return createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};
export const setSignInSuccess = (user) => {
  return createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);
};
export const setSignInFailure = (error) => {
  return createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILURE, error);
};

export const setSignOutStart = () => {
  return createAction(USER_ACTIONS_TYPES.SIGN_OUT_START);
};
export const setSignUpStart = (email, password, displayName) => {
  return createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};
