import Swal from "sweetalert2";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { USER_ACTIONS_TYPES } from "./user.types";

/////////////////////////////////// put -> dispatch //  call : create effect description , call promise    /////////////////////////////////////////////

import {
  // setGoogleSignInStart,
  // setEmailSignInStart,
  setSignInSuccess,
  setSignInFailure,
  // setCheckUserSession,
} from "./user.actions";

import {
  signOutUser,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  signInEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth) {
      yield call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    yield put(setSignInFailure(error));
  }
}

export function* onCkeckUserSession() {
  yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isAuthenticated);
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalData
    );
    // console.log(userSnapshot);
    yield put(
      setSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(setSignInFailure(error));

    // throw new Exception(error);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(errorFunction, error);
    yield put(setSignInFailure(error));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield call(errorFunction, error);
    yield put(setSignInFailure(error));
  }
}

export function errorFunction(error) {
  let errorMsg = error.message
    .split(":")[1]
    .replace("auth/", "")
    .replaceAll("-", " ");
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMsg,
  });
}

export function* signOut() {
  try {
    yield call(signOutUser);
  } catch (error) {
    // yield call(errorFunction, error);
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log(user);

    yield call(getSnapshotFromUserAuth, user, { displayName });
    yield call(()=>{
      window.location.reload(false)
    })
  } catch (error) {
    yield call(errorFunction, error);
    yield put(setSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signUp);
}

export function* userSaga() {
  yield all([
    call(onCkeckUserSession),
    call(onEmailSignInStart),
    call(onSignInWithGoogleStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
