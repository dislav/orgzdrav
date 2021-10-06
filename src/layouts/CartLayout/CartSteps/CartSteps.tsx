import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import {
    CartItemQuantityInputProps,
    UpdateItemQuantitiesMutation,
    UpdateItemQuantitiesMutationProps,
} from '@graphql/mutations/updateItemQuantities';

import { Container, Products, Footer, Price } from './CartSteps.styled';
import CartProduct from '@components/CartProduct/CartProduct';

const CartSteps: React.FC = () => {
    const { data: cart, loading, refetch } = useQuery<GetCartQueryProps>(GetCartQuery);
    const [updateQuantities, { loading: quantitiesLoading }] = useMutation<
        UpdateItemQuantitiesMutationProps,
        CartItemQuantityInputProps
    >(UpdateItemQuantitiesMutation);

    if (!cart?.cart && loading) {
        return <div>Загрузка</div>;
    }

    const onUpdateQuantity = async (key: string, quantity: number) => {
        try {
            const { data } = await updateQuantities({
                variables: { items: [{ key, quantity }] },
            });

            if (data?.updateItemQuantities) {
                console.log(data?.updateItemQuantities);
                await refetch();
            }
        } catch (e) {}
    };

    return (
        <Container>
            <Products>
                {cart?.cart.contents.nodes.map(
                    ({ key: productKey, quantity, total, product }, index) => (
                        <CartProduct
                            key={index}
                            productKey={productKey}
                            quantity={quantity}
                            totalPrice={total}
                            onUpdateQuantity={onUpdateQuantity}
                            {...product.node}
                        />
                    )
                )}
            </Products>
            <Footer>
                <span>Итого:</span>
                {cart?.cart.total && (
                    <Price
                        dangerouslySetInnerHTML={{ __html: cart.cart.total }}
                    />
                )}
            </Footer>
        </Container>
    );
};

export default CartSteps;
