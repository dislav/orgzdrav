import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    Wrapper,
    Button,
    CartButton,
    CartCounter,
} from './ShopFooter.styled';
import { CartIcon } from '@icons/icons';
import { useCart } from '@hooks/useCart';
import { getCartItemCount, getCartProducts } from '@redux/cart/selectors';

interface IShopFooter {
    product?: SimpleProductProps;
}

const ShopFooter: React.FC<IShopFooter> = ({ product }) => {
    const cartProducts = useSelector(getCartProducts);
    const itemCount = useSelector(getCartItemCount);

    const { onAddProductToCart, onRemoveProductFromCart, isLoading } =
        useCart();

    const productKey = useMemo(() => {
        if (cartProducts.length && product?.databaseId)
            return (
                cartProducts.find(
                    (cartProduct) =>
                        cartProduct.product.node.databaseId ===
                        product.databaseId
                )?.key || null
            );

        return null;
    }, [cartProducts, product?.databaseId]);

    const onAddProduct = () => {
        if (product?.databaseId) onAddProductToCart(product.databaseId);
    };

    const onRemoveProduct = () => {
        if (productKey) onRemoveProductFromCart(productKey);
    };

    return (
        <Container>
            <Wrapper>
                {productKey ? (
                    <Button onClick={onRemoveProduct} isLoading={isLoading}>
                        Удалить из корзины
                    </Button>
                ) : (
                    product?.databaseId && (
                        <Button onClick={onAddProduct} isLoading={isLoading}>
                            Добавить в корзину
                        </Button>
                    )
                )}

                <Link href="/cart">
                    <a>
                        {!product?.databaseId && <span>Корзина</span>}
                        <CartButton>
                            {itemCount > 0 && (
                                <CartCounter>{itemCount}</CartCounter>
                            )}
                            <CartIcon />
                        </CartButton>
                    </a>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default ShopFooter;
