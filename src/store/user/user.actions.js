import {
  createAction,
} from "../../utils/reducer/reducer.utils";
import {
    USER_ACTIONS_TYPES,
} from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTIONS_TYPES.SET_NEW_USER, user);
};
