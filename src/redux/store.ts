import { useMemo } from 'react';
import { createStore, Store } from 'redux';
import rootReducer, { RootReducer } from './rootReducer';

let store: Store<RootReducer> | undefined;

export const makeStore = (initialState?: Store<RootReducer>) =>
    createStore(rootReducer, initialState);

export const initStore = (preloadedState?: Store<Partial<RootReducer>>) => {
    let _store = store ?? makeStore(preloadedState);

    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState
        });

        store = undefined;
    }

    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
}

export const useStore = (initialState?: Store<Partial<RootReducer>>) => {
    const store = useMemo(() => makeStore(initialState), [initialState]);
    return store;
}
