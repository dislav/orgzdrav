import { useMemo } from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './sagas';
import rootReducer, { RootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const makeStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSagas);

    return store;
};

export const useStore = (initialState?: Store<RootReducer>) => {
    const store = useMemo(() => makeStore(initialState), [initialState]);
    return store;
};
