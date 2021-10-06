import { RootReducer } from '@redux/rootReducer';
import { createSelector } from 'reselect';

export const getUser = (state: RootReducer) => state.user;

export const getIsLoggedIn = createSelector(getUser, (state) => !!state.id);

export const getUserName = createSelector(getUser, (state) => {
    return `${state.firstName || ''}${
        state.lastName ? ` ${state.lastName}` : ''
    }`;
});

export const getUserAbbreviatedName = createSelector(getUser, (state) => {
    if (state.firstName || state.firstName) {
        return `${state.firstName ? state.firstName[0] : ''}${
            state.lastName ? state.lastName[0] : ''
        }`;
    }

    return state.username[0];
});
