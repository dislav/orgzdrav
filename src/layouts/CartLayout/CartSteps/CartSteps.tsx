import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import {
    CartItemQuantityInputProps,
    UpdateItemQuantitiesMutation,
    UpdateItemQuantitiesMutationProps,
} from '@graphql/mutations/updateItemQuantities';

import { Container, Products, Footer, Price, Loader } from './CartSteps.styled';
import CartProduct from '@components/CartProduct/CartProduct';
import Spinner from '@components/Spinner/Spinner';
import PromoCode from '@layouts/CartLayout/CartSteps/PromoCode/PromoCode';

const CartSteps: React.FC = () => {
    const {
        data: cart,
        loading,
        refetch,
    } = useQuery<GetCartQueryProps>(GetCartQuery);

    const [updateQuantities, { loading: quantitiesLoading }] = useMutation<
        UpdateItemQuantitiesMutationProps,
        CartItemQuantityInputProps
    >(UpdateItemQuantitiesMutation);

    const onUpdateQuantity = async (key: string, quantity: number) => {
        try {
            const { data } = await updateQuantities({
                variables: { items: [{ key, quantity }] },
            });

            if (data?.updateItemQuantities) {
                await refetch();
            }
        } catch (e) {}
    };

    if (!cart?.cart && loading) {
        return <div>Загрузка</div>;
    }

    return (
        <Container>
            {quantitiesLoading && (
                <Loader>
                    <Spinner />
                </Loader>
            )}

            <Products>
                {cart?.cart.contents.nodes.map(
                    ({ key: productKey, quantity, total, product }, index) => (
                        <CartProduct
                            key={index}
                            quantity={quantity}
                            totalPrice={total}
                            onUpdateQuantity={(count) =>
                                onUpdateQuantity(productKey, count)
                            }
                            {...product.node}
                        />
                    )
                )}
            </Products>

            <PromoCode coupons={cart?.cart.appliedCoupons} onAddPromoCode={refetch} />

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
