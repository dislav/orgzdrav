import React from 'react';

import { Container } from './CartLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const CartLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default CartLayout;
