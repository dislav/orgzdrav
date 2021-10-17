import React from 'react';

import { ILayout } from '@components/Layout/Layout';
import { Container } from './OrdersLayout.styled';

const OrdersLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default OrdersLayout;
