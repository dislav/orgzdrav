import React from 'react';

import { Container } from './StocksLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const StocksLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default StocksLayout;
