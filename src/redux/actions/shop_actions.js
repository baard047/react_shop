import { shopTypes } from "../types";


export const updateCollections = collectionsMap => ({
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});