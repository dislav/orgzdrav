import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';

import CartLayout from '@layouts/CartLayout/CartLayout';
import CartSummary from '@components/CartSummary/CartSummary';
import Spinner from '@components/Spinner/Spinner';
import EmptyList from '@components/EmptyList/EmptyList';
import CheckoutToolbar from '@layouts/CartLayout/CheckoutToolbar/CheckoutToolbar';

import { getCartItemCount, getIsCartLoading } from "@redux/cart/selectors"

const Cart: React.FC = () => {
    const isLoading = useSelector(getIsCartLoading);
    const itemCount = useSelector(getCartItemCount);

    const { data: profile } = useQuery<GetViewerQueryProps>(GetViewerQuery);

    return (
        <CartLayout meta={{ title: 'Корзина' }} hideFooter hideShopFooter>
            {isLoading && <Spinner />}

            {!isLoading && itemCount > 0 && (
                <>
                    <CartSummary />

                    <CheckoutToolbar
                        profile={profile?.viewer}
                    />
                </>
            )}

            {!isLoading && itemCount <= 0 && (
                <EmptyList>
                    <span>Корзина пуста</span>
                </EmptyList>
            )}
        </CartLayout>
    );
};

export default Cart;
