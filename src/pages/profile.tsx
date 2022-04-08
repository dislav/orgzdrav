import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ProfileLayout from '@layouts/ProfileLayout/ProfileLayout';
import ProfileCard from '@components/ProfileCard/ProfileCard';
import Spinner from '@components/Spinner/Spinner';

import { getToken } from '@graphql/utils';
import {
    getCustomerDisplayName,
    getCustomerLoading,
    getIsLoggedIn,
} from '@redux/customer/selectors';

const Profile = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isLoading = useSelector(getCustomerLoading);
    const displayName = useSelector(getCustomerDisplayName);

    useEffect(() => {
        if (!getToken() && !isLoading && !isLoggedIn) router.push('/');
    }, [isLoading, isLoggedIn, router]);

    return (
        <ProfileLayout meta={{ title: displayName || '' }} hideFooter>
            {isLoading && <Spinner />}
            {!isLoading && isLoggedIn && <ProfileCard />}
        </ProfileLayout>
    );
};

export default Profile;
