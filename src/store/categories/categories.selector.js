import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.is_loading
);
