import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import {
    RemoveItemsFromCartMutation,
    RemoveItemsFromCartMutationProps,
    RemoveItemsFromCartMutationQueryProps,
} from '@graphql/mutations/removeItemsFromCart';

import CartLayout from '@layouts/CartLayout/CartLayout';
import CartSummary from '@components/CartSummary/CartSummary';
import Spinner from '@components/Spinner/Spinner';
import EmptyList from '@components/EmptyList/EmptyList';
import CheckoutToolbar from '@layouts/CartLayout/CheckoutToolbar/CheckoutToolbar';

const Cart: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { data: profile } = useQuery<GetViewerQueryProps>(GetViewerQuery);
    const {
        data: cart,
        loading,
        refetch,
    } = useQuery<GetCartQueryProps>(GetCartQuery);

    const [removeItemsFromCart] = useMutation<
        RemoveItemsFromCartMutationProps,
        RemoveItemsFromCartMutationQueryProps
    >(RemoveItemsFromCartMutation);

    const onRemoveProduct = async (keys: string[]) => {
        setIsLoading(true);

        try {
            const { data } = await removeItemsFromCart({
                variables: { input: { keys } },
            });

            if (data?.removeItemsFromCart) {
                await refetch();
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <CartLayout meta={{ title: 'Корзина' }} hideFooter hideShopFooter>
            {loading && <Spinner />}

            {!loading && cart?.cart && cart.cart.contents.productCount > 0 && (
                <>
                    <CartSummary
                        cart={cart.cart}
                        isLoading={isLoading}
                        onRemoveItem={onRemoveProduct}
                        onUpdate={refetch}
                    />

                    <CheckoutToolbar
                        profile={profile?.viewer}
                        total={cart.cart.total}
                    />
                </>
            )}

            {!loading && cart?.cart && cart.cart.contents.productCount <= 0 && (
                <EmptyList>
                    <span>Корзина пуста</span>
                </EmptyList>
            )}
        </CartLayout>
    );
};

export default Cart;
