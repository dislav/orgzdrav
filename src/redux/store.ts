import { useMemo } from 'react';
import { CombinedState, createStore, Store } from 'redux';
import rootReducer, { RootReducer } from './rootReducer';

let store: any;

export const makeStore = (initialState = {}) =>
    createStore(rootReducer, initialState);

export const initStore = (preloadedState?: Store<RootReducer>) => {
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
    const store = useMemo(() => makeStore(initialState), [initialState]);
    return store;
};
