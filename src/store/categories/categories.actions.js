import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const setCategories = (categories) => {
  return createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories);
};
