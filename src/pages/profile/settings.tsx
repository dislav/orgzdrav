import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ProfileLayout from '@layouts/ProfileLayout/ProfileLayout';
import ProfileForm from '@components/ProfileForm/ProfileForm';
import Spinner from '@components/Spinner/Spinner';

import { getIsLoggedIn, getIsProfileLoading } from '@redux/profile/selectors';
import { getToken } from '@graphql/utils';

const Settings: React.FC = () => {
    const router = useRouter();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const isLoading = useSelector(getIsProfileLoading);

    useEffect(() => {
        if (!getToken() && !isLoading && !isLoggedIn) router.push('/');
    }, [isLoading, isLoggedIn, router]);

    return (
        <ProfileLayout hideFooter>
            {isLoading && <Spinner />}
            {!isLoading && isLoggedIn && <ProfileForm />}
        </ProfileLayout>
    );
};

export default Settings;
