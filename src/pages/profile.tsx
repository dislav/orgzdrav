import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Layout from '@components/Layout/Layout';
import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import ProfileCard from '@components/ProfileCard/ProfileCard';
import Spinner from '@components/Spinner/Spinner';

const Profile = () => {
    const router = useRouter();
    const { data, loading } = useQuery<GetViewerQueryProps>(GetViewerQuery);

    useEffect(() => {
        if (!data?.viewer) {
            router.push('/');
        }
    }, [data]);

    const title = useMemo(() => {
        if (!data?.viewer) return '';

        return `${data.viewer.firstName}${
            data.viewer.lastName ? ` ${data.viewer.lastName}` : ''
        }`;
    }, [data]);

    return (
        <Layout meta={{ title }} hideFooter>
            {loading && <Spinner />}
            {!loading && data?.viewer && <ProfileCard profile={data.viewer} />}
        </Layout>
    );
};

export default Profile;