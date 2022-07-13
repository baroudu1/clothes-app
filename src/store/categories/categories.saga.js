import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesCollections } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./categories.actions";

import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesCollections, "categories");
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}





export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}



export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
