import { createSelector } from 'reselect';

import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';

export const getProfile = (state: RootReducer) => state.profile;

export const getIsLoggedIn = createSelector(
    getProfile,
    (profile) => profile.isLoggedIn
);

export const getIsProfileLoading = createSelector(getProfile, (profile) =>
    [PromiseStatus.Idle, PromiseStatus.Loading].includes(profile.status)
);
