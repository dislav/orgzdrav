import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { SimpleProductFragment } from '@graphql';

import {
    Container,
    ImageWrapper,
    Footer,
    Title,
    Description,
    Button,
    FooterWrapper,
} from './ProductCard.styled';

import { useCart } from '@hooks/useCart';
import { getCartProducts } from '@redux/cart/selectors';
import Price from '@components/Price/Price';

const ProductCard: React.FC<SimpleProductFragment> = ({
    slug,
    name,
    image,
    regularPrice,
    salePrice,
    databaseId,
    shortDescription,
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
            <Container>
                {image?.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={image.sourceUrl}
                            alt={name || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}

                <Footer>
                    <Title>{name}</Title>

                    {shortDescription && (
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: shortDescription,
                            }}
                        />
                    )}

                    <FooterWrapper>
                        {regularPrice && (
                            <Price
                                regularPrice={regularPrice}
                                salePrice={salePrice}
                            />
                        )}

                        <Button onClick={onClickHandler} isLoading={isLoading}>
                            {!productKey ? 'В корзину' : 'Добавлено'}
                        </Button>
                    </FooterWrapper>
                </Footer>
            </Container>
        </Link>
    );
};

export default ProductCard;
