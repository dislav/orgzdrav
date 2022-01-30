import React from 'react';
import { useDispatch } from 'react-redux';

import { setCart } from '@redux/cart/actions';
import { useAddToCartMutation, useRemoveItemsFromCartMutation } from '@graphql';

export const useCart = () => {
    const dispatch = useDispatch();

    const [addToCart, { loading: addToCartLoading }] = useAddToCartMutation();

    const [removeItemsFromCart, { loading: removeItemsFromCartLoading }] =
        useRemoveItemsFromCartMutation();

    const onAddProductToCart = async (databaseId: number) => {
        try {
            const { data } = await addToCart({
                variables: { input: { productId: databaseId } },
            });

            if (data?.addToCart?.cart) dispatch(setCart(data.addToCart.cart));
        } catch (e) {
            console.log(e);
        }
    };

    const onRemoveProductFromCart = async (key: string) => {
        if (key) {
            try {
                const { data } = await removeItemsFromCart({
                    variables: { input: { keys: [key] } },
                });

                if (data?.removeItemsFromCart?.cart)
                    dispatch(setCart(data.removeItemsFromCart.cart));
            } catch (e) {
                console.log(e);
            }
        }
    };

    return {
        onAddProductToCart,
        onRemoveProductFromCart,
        isLoading: addToCartLoading || removeItemsFromCartLoading,
    };
};
