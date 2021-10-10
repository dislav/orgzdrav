import React from 'react';

import { Container } from './HomeLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const HomeLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default HomeLayout;
