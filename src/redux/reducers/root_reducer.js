import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' //localstorage as default

import {userReducer} from "./user_reducer";
import {cartReducer} from "./cart_reducer";
import directoryReducer from "./directory_reducer";
import shopReducer from "./shop_reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //user is held by firebase
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);