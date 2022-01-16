import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useMutation } from '@apollo/client';
import {
    AddToCartMutation,
    AddToCartMutationOptionsProps,
    AddToCartMutationProps,
} from '@graphql/mutations/addToCart';
import {
    RemoveItemsFromCartMutation,
    RemoveItemsFromCartMutationProps,
    RemoveItemsFromCartMutationQueryProps,
} from '@graphql/mutations/removeItemsFromCart';

import { setCart } from '@redux/cart/actions';

export const useCart = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const [addToCart] = useMutation<
        AddToCartMutationProps,
        AddToCartMutationOptionsProps
    >(AddToCartMutation);

    const [removeItemsFromCart] = useMutation<
        RemoveItemsFromCartMutationProps,
        RemoveItemsFromCartMutationQueryProps
    >(RemoveItemsFromCartMutation);

    const onAddProductToCart = async (databaseId: number) => {
        setIsLoading(true);

        try {
            const { data } = await addToCart({
                variables: { productId: databaseId },
            });

            if (data?.addToCart.cart) dispatch(setCart(data.addToCart.cart));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const onRemoveProductFromCart = async (key: string) => {
        setIsLoading(true);

        if (key) {
            try {
                const { data } = await removeItemsFromCart({
                    variables: { input: { keys: [key] } },
                });

                if (data?.removeItemsFromCart.cart)
                    dispatch(setCart(data.removeItemsFromCart.cart));
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        onAddProductToCart,
        onRemoveProductFromCart,
        isLoading,
    };
};
