import { takeLatest, put, all, call } from 'redux-saga/effects'
import { userTypes } from "../types";

import { auth, googleAuthProvider, createUserRecord } from "../../firebase/firebase_utils";

import {
    signInSuccess,
    signInFail,
} from "../actions/user_actions";

export function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserRecord, user); //getting userRef from firestore db
        const snapshot = yield userRef.get();
        yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() })); //putting user back in regular redux flow
    } catch (error) {
        yield put(signInFail(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleAuthProvider); //getting user auth object
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFail(error));
    }
}

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFail(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

