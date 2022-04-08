import { useMemo } from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootSagas from './sagas';
import rootReducer, { RootReducer } from './rootReducer';

let store: Store<RootReducer> | undefined;

export const makeStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        // applyMiddleware(sagaMiddleware)
        applyMiddleware(sagaMiddleware, logger)
    );

    sagaMiddleware.run(rootSagas);

    return store;
};

const initializeStore = (preloadedState = {}) => {
    let _store = store ?? makeStore(preloadedState);

    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        });

        store = undefined;
    }

    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
};

export const useStore = (initialState?: Store<RootReducer>) => {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
};
