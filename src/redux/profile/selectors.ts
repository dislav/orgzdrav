import { createSelector } from 'reselect';

import { RootReducer } from '@redux/rootReducer';
import { PromiseStatus } from '@redux/types';

export const getProfile = (state: RootReducer) => state.profile;

export const getIsLoggedIn = createSelector(
    getProfile,
    (profile) => profile.isLoggedIn
);

export const getProfileStatus = createSelector(
    getProfile,
    (profile) => profile.status
);

export const getIsProfileLoading = createSelector(
    getProfileStatus,
    (status) => status === PromiseStatus.Loading
);
