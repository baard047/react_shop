import { combineReducers } from 'redux';
import {userReducer} from "./user_reducer";
import {cartReducer} from "./cart_reducer";

export const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer
});