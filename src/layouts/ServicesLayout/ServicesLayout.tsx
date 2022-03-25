import React from 'react';

import { Container } from './ServicesLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const ServicesLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default ServicesLayout;
