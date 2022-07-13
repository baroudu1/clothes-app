import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  is_loading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        is_loading: true,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS:
      const { is_loading } = state;
      // console.log(payload);
      // console.log(is_loading);
      if (is_loading) {
        return {
          ...state,
          is_loading: false,
          categories: payload,
        };
      }
      return state;
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
        is_loading: false,
      };
    default:
      return state;
  }
};
