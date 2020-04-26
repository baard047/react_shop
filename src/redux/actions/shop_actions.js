import { shopTypes } from "../types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase_utils";


export const fetchCollectionsStart = () => ({
    type: shopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFail = errorMessage => ({
    type: shopTypes.FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFail(error.message)))
    }
};


