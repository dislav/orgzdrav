import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { SimpleProductFragment } from '@graphql';

import { Container, Button } from './ProductItem.styled';

import { getCartProducts } from '@redux/cart/selectors';
import { useCart } from '@hooks/useCart';

interface IProductItem extends SimpleProductFragment {
    className?: string;
}

const ProductItem: React.FC<IProductItem> = ({
    className,
    slug,
    databaseId,
    name,
}) => {
    const cartProducts = useSelector(getCartProducts);

    const { onAddProductToCart, onRemoveProductFromCart, isLoading } =
        useCart();

    const productKey = useMemo(() => {
        if (cartProducts.length)
            return (
                cartProducts.find(
                    (product) =>
                        (product?.product?.node as SimpleProductFragment)
                            .databaseId === databaseId
                )?.key || null
            );

        return null;
    }, [cartProducts, databaseId]);

    const onClickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        if (!productKey) {
            onAddProductToCart(databaseId);
        } else {
            onRemoveProductFromCart(productKey);
        }
    };

    return (
        <Link href={`/catalog/${slug}`} passHref>
            <Container className={className}>
                {name}
                <Button onClick={onClickHandler} isLoading={isLoading}>
                    {!productKey ? 'В корзину' : 'Добавлено'}
                </Button>
            </Container>
        </Link>
    );
};

export default ProductItem;
