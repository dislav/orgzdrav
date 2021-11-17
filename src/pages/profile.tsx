import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Layout from '@components/Layout/Layout';
import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';

const Profile = () => {
    const router = useRouter();
    const { data, loading } = useQuery<GetViewerQueryProps>(GetViewerQuery);

    useMemo(() => {
        if (!loading && !data?.viewer) {
            router.push('/');
        }
    }, [data, loading]);

    const title = useMemo(() => {
        if (!data) return '';

        return `${data.viewer.firstName}${
            data.viewer.lastName ? ` ${data.viewer.lastName}` : ''
        }`;
    }, [data]);

    console.log(data);

    return <Layout meta={{ title }}></Layout>;
};

export default Profile;
