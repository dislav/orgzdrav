import { createSelector } from 'reselect';
import { RootReducer } from '@redux/rootReducer';

export const getProfile = (state: RootReducer) => state.profile;

export const getIsLoggedIn = createSelector(
    getProfile,
    (profile) => profile.isLoggedIn
);
