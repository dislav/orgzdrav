import React from 'react';

import CartLayout from '@layouts/CartLayout/CartLayout';
import Meta from '@components/Meta/Meta';
import CartSteps from '@layouts/CartLayout/CartSteps/CartSteps';

const Cart: React.FC = () => {
    return (
        <CartLayout hideFooter showCatalogButton isCheckout>
            <Meta title="Корзина" />
            <CartSteps />
        </CartLayout>
    );
};

export default Cart;
