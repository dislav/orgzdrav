import React from 'react';

import { ILayout } from '@components/Layout/Layout';
import { Container } from './WebinarLayout.styled';

interface IWebinarLayout extends ILayout {
    className?: string;
}

const WebinarLayout: React.FC<IWebinarLayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default WebinarLayout;
