import React from 'react';
import { useSelector } from 'react-redux';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    Products,
    Footer,
    Row,
    Price,
    Loader,
} from './CartSummary.styled';
import CartProduct from '@components/CartProduct/CartProduct';
import Spinner from '@components/Spinner/Spinner';
import PromoCode from '@components/CartSummary/PromoCode/PromoCode';

import { getCart, getCartProducts } from '@redux/cart/selectors';
import { useCart } from '@hooks/useCart';

const CartSummary: React.FC = () => {
    const cart = useSelector(getCart);
    const products = useSelector(getCartProducts);

    const { onRemoveProductFromCart, isLoading } = useCart();

    const onRemoveProduct = (key: string) => () => onRemoveProductFromCart(key);

    const discount = cart.discountTotal
        ? +cart.discountTotal.replace(/\D+/gm, '')
        : null;

    return (
        <Container>
            {isLoading && (
                <Loader>
                    <Spinner />
                </Loader>
            )}

            {products.length > 0 && (
                <Products>
                    {products.map((product, index) => (
                        <CartProduct
                            key={index}
                            onRemoveProduct={onRemoveProduct(
                                product?.key || ''
                            )}
                            totalPrice={product?.total}
                            {...(product?.product
                                ?.node as SimpleProductFragment)}
                        />
                    ))}
                </Products>
            )}

            <PromoCode />

            <Footer>
                {cart.discountTotal &&
                    cart.subtotal &&
                    cart.subtotal !== cart.total && (
                        <>
                            <Row smallPrice>
                                <span>Итого (без учета скидки):</span>
                                <Price regularPrice={cart.subtotal} />
                            </Row>

                            <Row smallPrice>
                                <span>Скидка:</span>
                                <Price regularPrice={cart.discountTotal} />
                            </Row>
                        </>
                    )}

                {cart.total && (
                    <Row>
                        <span>Итого:</span>
                        <Price regularPrice={cart.total} />
                    </Row>
                )}
            </Footer>
        </Container>
    );
};

export default CartSummary;
