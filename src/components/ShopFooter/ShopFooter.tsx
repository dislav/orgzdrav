import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SimpleProductProps } from '@graphql/fragments/simpleProduct';

import {
    Container,
    Wrapper,
    Button,
    CartButton,
    CartCounter,
} from './ShopFooter.styled';
import { CartIcon, DotsMenu } from '@icons/icons';

export interface IShopFooter {
    product?: SimpleProductProps;
    itemCount: number;
    showCatalogButton?: boolean;
    isLoading?: boolean;
    hasItemInCart?: boolean;
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
}

const ShopFooter: React.FC<IShopFooter> = ({
    product,
    itemCount,
    showCatalogButton,
    isLoading,
    hasItemInCart,
    onAddToCart,
    onRemoveFromCart,
}) => {
    const { asPath } = useRouter();

    const hasCartButton = !['/cart'].includes(asPath);

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

                {hasCartButton && (
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
