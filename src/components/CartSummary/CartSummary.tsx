import React from 'react';

import { GetCartQueryProps } from '@graphql/queries/cart';

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

interface ICartSummary {
    cart: GetCartQueryProps['cart'];
    isLoading?: boolean;
    onUpdate?: () => void;
    onRemoveItem?: (items: string[]) => void;
}

const CartSummary: React.FC<ICartSummary> = ({
    cart,
    isLoading,
    onUpdate,
    onRemoveItem,
}) => {
    return (
        <Container>
            {isLoading && (
                <Loader>
                    <Spinner />
                </Loader>
            )}

            <Products>
                {cart.contents.nodes.map(
                    ({ key: productKey, quantity, total, product }, index) => (
                        <CartProduct
                            key={index}
                            quantity={quantity}
                            totalPrice={total}
                            onRemoveProduct={() => onRemoveItem?.([productKey])}
                            {...product.node}
                        />
                    )
                )}
            </Products>

            <PromoCode
                coupons={cart.appliedCoupons || []}
                onUpdateCart={onUpdate}
            />

            <Footer>
                <span>Итого:</span>
                {cart.total && (
                    <Price dangerouslySetInnerHTML={{ __html: cart.total }} />
                )}
            </Footer>
        </Container>
    );
};

export default CartSummary;
