import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Layout from '@components/Layout/Layout';
import ProfileCard from '@components/ProfileCard/ProfileCard';
import Spinner from '@components/Spinner/Spinner';

import {
    getIsLoggedIn,
    getIsProfileLoading,
    getProfile,
} from '@redux/profile/selectors';
import { getToken } from '@graphql/utils';

const Profile = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isLoading = useSelector(getIsProfileLoading);
    const profile = useSelector(getProfile);

    useEffect(() => {
        if (!getToken() && !isLoading && !isLoggedIn) router.push('/');
    }, [isLoading, isLoggedIn, router]);

    const title = useMemo(() => {
        if (!isLoading && !isLoggedIn) return '';

        return `${profile.firstName}${
            profile.lastName ? ` ${profile.lastName}` : ''
        }`;
    }, [isLoading, isLoggedIn, profile]);

    return (
        <Layout meta={{ title }} hideFooter>
            {isLoading && <Spinner />}
            {!isLoading && isLoggedIn && <ProfileCard />}
        </Layout>
    );
};

export default Profile;
