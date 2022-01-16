import React from 'react';
import { useSelector } from 'react-redux';

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

import { getCart } from '@redux/cart/selectors';
import { useCart } from '@hooks/useCart';

const CartSummary: React.FC = () => {
    const cart = useSelector(getCart);

    const { onRemoveProductFromCart, isLoading } = useCart();

    const onRemoveProduct = (key: string) => () => onRemoveProductFromCart(key);

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
                            onRemoveProduct={onRemoveProduct(productKey)}
                            {...product.node}
                        />
                    )
                )}
            </Products>

            {/*<PromoCode*/}
            {/*    coupons={cart.appliedCoupons || []}*/}
            {/*    onUpdateCart={onUpdate}*/}
            {/*/>*/}

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
