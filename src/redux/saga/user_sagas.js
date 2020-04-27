import { takeLatest, put, all, call } from 'redux-saga/effects'
import { userTypes } from "../types";

import { auth, googleAuthProvider, createUserRecord } from "../../firebase/firebase_utils";

import { googleSignInSuccess, googleSignInFail } from "../actions/user_actions";

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleAuthProvider); //getting user auth object
        const userRef = yield call(createUserRecord, user); //getting userRef from firestore db
        const snapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() })); //putting user back in regular redux flow
    } catch (error) {
        yield put(googleSignInFail(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}

