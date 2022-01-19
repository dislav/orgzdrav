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

const Profile = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isLoading = useSelector(getIsProfileLoading);
    const profile = useSelector(getProfile);

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            router.push('/');
        }
    }, [isLoading, isLoggedIn]);

    const title = useMemo(() => {
        if (!isLoading && !isLoggedIn) return '';

        return `${profile.firstName}${
            profile.lastName ? ` ${profile.lastName}` : ''
        }`;
    }, [isLoading, isLoggedIn, profile]);

    return (
        <Layout meta={{ title }} hideFooter>
            {isLoading && <Spinner />}
            {!isLoading && <ProfileCard />}
        </Layout>
    );
};

export default Profile;
