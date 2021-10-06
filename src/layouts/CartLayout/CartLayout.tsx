import React from 'react';

import { Container } from './CartLayout.styled';

const CartLayout: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default CartLayout;
