import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from 'redux-logger';
//import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import persistReducer from './reducers/root_reducer';
import rootSaga from "./saga/root_saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if ( process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger)
}

export const store = createStore(persistReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);