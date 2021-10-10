import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';

import VideosLayout from '@layouts/VideosLayout/VideosLayout';
import Meta from '@components/Meta/Meta';
import VideoList from '@layouts/VideosLayout/VideoList/VideoList';

const Videos: React.FC = () => {
    const { data: profile, loading } =
        useQuery<GetViewerQueryProps>(GetViewerQuery);

    const router = useRouter();

    useEffect(() => {
        if (!loading && !profile?.viewer) router.push('/');
    }, [profile, loading, router]);

    return (
        <VideosLayout hideFooter>
            <Meta title="Видеозаписи" />

            {!loading && profile?.viewer && (
                <VideoList videos={profile.viewer.videos.availableVideos} />
            )}
        </VideosLayout>
    );
};

export default Videos;
