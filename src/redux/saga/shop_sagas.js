import { takeLatest, call, put } from 'redux-saga/effects'
import { shopTypes } from "../types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase_utils";
import { fetchCollectionsFail, fetchCollectionsSuccess } from "../actions/shop_actions";

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        //call - method, which allows full control of a situation
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        //put - saga effect, same as dispatch, excepts for yield
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFail(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}