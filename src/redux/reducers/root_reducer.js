import { combineReducers } from 'redux';
import {userReducer} from "./user_reducer";

export const rootReducer = combineReducers({
   user: userReducer
});