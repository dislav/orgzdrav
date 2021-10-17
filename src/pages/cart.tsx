import React from 'react';

import CartLayout from '@layouts/CartLayout/CartLayout';
import Meta from '@components/Meta/Meta';
import CartSummary from '@components/CartSummary/CartSummary';

const Cart: React.FC = () => {
    return (
        <CartLayout hideFooter showCatalogButton isCheckout>
            <Meta title="Корзина" />
            <CartSummary />
        </CartLayout>
    );
};

export default Cart;
