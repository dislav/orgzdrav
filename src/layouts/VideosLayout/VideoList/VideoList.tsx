import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { VideoProps } from '@graphql/fragments/video';

import { Container, Search, List } from './VideoList.styled';
import VideoCard from '@components/VideoCard/VideoCard';
import Input from '@components/Input/Input';

interface IVideoList {
    className?: string;
    videos: VideoProps[];
}

interface Inputs {
    search: string;
}

const VideoList: React.FC<IVideoList> = ({ className, videos }) => {
    const { register, watch } = useForm<Inputs>();

    const search = watch('search', '');

    const filteredVideos = useMemo(() => {
        if (search.length) {
            return videos.filter(
                (video) =>
                    video.title.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
            );
        }

        return videos;
    }, [videos, search]);

    return (
        <Container className={className}>
            <Search>
                <Input
                    name="search"
                    placeholder="Поиск видеозаписи"
                    register={register}
                />
            </Search>

            <List>
                {filteredVideos.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </List>
        </Container>
    );
};

export default VideoList;
