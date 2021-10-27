import React from 'react';
import Link from 'next/link';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    Wrapper,
    Button,
    CartButton,
    CartCounter,
    CheckoutLink,
} from './ShopFooter.styled';
import { CartIcon, DotsMenu } from '@icons/icons';

export interface IShopFooter {
    product?: SimpleProductProps;
    itemCount: number;
    showCatalogButton?: boolean;
    isCheckout?: boolean;
    isLoading?: boolean;
    hasItemInCart?: boolean;
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
}

const ShopFooter: React.FC<IShopFooter> = ({
    product,
    itemCount,
    showCatalogButton,
    isCheckout,
    isLoading,
    hasItemInCart,
    onAddToCart,
    onRemoveFromCart,
}) => {
    return (
        <Container>
            <Wrapper>
                {showCatalogButton && (
                    <Link href="/catalog" passHref>
                        <a>
                            <DotsMenu />
                        </a>
                    </Link>
                )}

                {hasItemInCart ? (
                    <Button onClick={onRemoveFromCart} isLoading={isLoading}>
                        Удалить из корзины
                    </Button>
                ) : (
                    product?.databaseId && (
                        <Button onClick={onAddToCart} isLoading={isLoading}>
                            Добавить в корзину
                        </Button>
                    )
                )}

                {isCheckout ? (
                    <Link href="/checkout" passHref>
                        <CheckoutLink>Оформить заказ</CheckoutLink>
                    </Link>
                ) : (
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
                )}
            </Wrapper>
        </Container>
    );
};

export default ShopFooter;
