import React from 'react';

import { VideoProps } from '@graphql/fragments/video';

import { Container, Description } from './VideoCard.styled';

interface IVideoCard extends VideoProps {
    className?: string;
}

const VideoCard: React.FC<IVideoCard> = ({ className, title, videosMain }) => {
    return (
        <Container className={className}>
            <h2>{title}</h2>

            {videosMain.description && (
                <Description dangerouslySetInnerHTML={{ __html: videosMain.description }} />
            )}

            <a href={videosMain.link} target="_blank" rel="noreferrer">
                Открыть видео
            </a>
        </Container>
    );
};

export default VideoCard;
