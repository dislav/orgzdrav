import React from 'react';

import { Container } from './VideosLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const VideosLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default VideosLayout;
