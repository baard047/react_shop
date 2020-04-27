import { all, call } from 'redux-saga/effects'
import { fetchCollectionsStart } from "./shop_sagas";
import { userSagas } from "./user_sagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}