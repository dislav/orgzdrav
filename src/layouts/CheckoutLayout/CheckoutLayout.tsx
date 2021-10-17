import React from 'react';

import { ILayout } from '@components/Layout/Layout';
import { Container } from './CheckoutLayout.styled';

const CheckoutLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default CheckoutLayout;
