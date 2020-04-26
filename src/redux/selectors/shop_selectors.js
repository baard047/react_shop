import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrl => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrl] : null
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const isCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);