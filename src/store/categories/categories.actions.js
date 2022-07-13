import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";
// import { getCategoriesCollections } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);
};
export const fetchCategoriesSuccess = (categories) => {
  return createAction(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  );
};

export const fetchCategoriesFailure = (error) => {
  return createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error);
};
// export const fetchCategoriesAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categories = await getCategoriesCollections("categories").then(
//         (categories) => categories
//       );
//       // console.log(categories);
//       dispatch(fetchCategoriesSuccess(categories));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
