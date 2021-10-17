import React from 'react';
import { ReactPlayerProps } from 'react-player';

import { Container, Player } from './Video.styled';

const Video: React.FC<ReactPlayerProps> = (props) => {
    return (
        <Container>
            <Player {...props} width="100%" height="100%" />
        </Container>
    );
};

export default Video;
