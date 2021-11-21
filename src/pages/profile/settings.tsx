import React from 'react';
import { useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';

import Layout from '@components/Layout/Layout';
import ProfileForm from '@components/ProfileForm/ProfileForm';
import Spinner from '@components/Spinner/Spinner';

const Settings: React.FC = () => {
    const { data: profile, loading } =
        useQuery<GetViewerQueryProps>(GetViewerQuery);

    return (
        <Layout hideFooter>
            {loading && <Spinner />}
            {!loading && profile?.viewer && (
                <ProfileForm profile={profile.viewer} />
            )}
        </Layout>
    );
};

export default Settings;
