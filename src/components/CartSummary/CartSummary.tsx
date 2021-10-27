import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';

import {
    Container,
    Products,
    Footer,
    Price,
    Loader,
} from './CartSummary.styled';
import CartProduct from '@components/CartProduct/CartProduct';
import Spinner from '@components/Spinner/Spinner';
import PromoCode from '@components/CartSummary/PromoCode/PromoCode';
import {
    RemoveItemsFromCartMutation,
    RemoveItemsFromCartMutationProps,
    RemoveItemsFromCartMutationQueryProps,
} from '@graphql/mutations/removeItemsFromCart';

interface ICartSummary {
    isReadOnly?: boolean;
}

const CartSummary: React.FC<ICartSummary> = ({ isReadOnly }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        data: cart,
        loading,
        refetch,
    } = useQuery<GetCartQueryProps>(GetCartQuery);

    const [removeItemsFromCart] = useMutation<
        RemoveItemsFromCartMutationProps,
        RemoveItemsFromCartMutationQueryProps
    >(RemoveItemsFromCartMutation);

    const onRemoveProduct = async (key: string) => {
        setIsLoading(true);

        try {
            const { data } = await removeItemsFromCart({
                variables: { input: { keys: [key] } },
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

    if (!cart?.cart && loading) {
        return <div>Загрузка</div>;
    }

    return (
        <Container>
            {isLoading && (
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
                            onRemoveProduct={() => onRemoveProduct(productKey)}
                            {...product.node}
                        />
                    )
                )}
            </Products>

            {!isReadOnly && (
                <PromoCode
                    coupons={cart?.cart.appliedCoupons || []}
                    onUpdateCart={refetch}
                />
            )}

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

export default CartSummary;
