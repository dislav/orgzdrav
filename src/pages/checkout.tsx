import React from 'react';

import CheckoutLayout from '@layouts/CheckoutLayout/CheckoutLayout';
import CartSummary from '@components/CartSummary/CartSummary';
import CheckoutForm from '@layouts/CheckoutLayout/CheckoutForm/CheckoutForm';

const Checkout: React.FC = () => {
    return (
        <CheckoutLayout hideFooter>
            <CartSummary isReadOnly />
            <CheckoutForm />
        </CheckoutLayout>
    );
};

export default Checkout;
