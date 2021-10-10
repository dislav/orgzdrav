import React from 'react';
import Link from 'next/link';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    Wrapper,
    Button,
    CartButton,
    CartCounter,
    CheckoutButton,
} from './ShopFooter.styled';
import { CartIcon, DotsMenu } from '@icons/icons';

export interface IShopFooter {
    product?: SimpleProductProps;
    itemCount: number;
    showCatalogButton?: boolean;
    isCheckout?: boolean;
    isLoading?: boolean;
    onAddToCart?: () => void;
}

const ShopFooter: React.FC<IShopFooter> = ({
    product,
    itemCount,
    showCatalogButton,
    isCheckout,
    isLoading,
    onAddToCart,
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

                {product?.databaseId && (
                    <Button onClick={onAddToCart} isLoading={isLoading}>
                        Добавить в корзину
                    </Button>
                )}

                {isCheckout ? (
                    <CheckoutButton>Оформить заказ</CheckoutButton>
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
