import React from 'react';

import { Container } from './HomeLayout.styled';

const HomeLayout: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default HomeLayout;
