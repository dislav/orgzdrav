import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SimpleProductProps } from '@graphql/types';
import {
    Container,
    ImageWrapper,
    Footer,
    FooterWrapper,
    Button,
    CartCounter,
    CartButton,
} from './CatalogLayout.styled';

import { CartIcon, DotsMenu } from '@icons/icons';

interface ICatalogLayout {
    product?: SimpleProductProps;
    isProductPage?: boolean;
}

interface LocalProduct {
    id: string;
    count: number;
}

const CatalogLayout: React.FC<ICatalogLayout> = ({
    children,
    product,
    isProductPage,
}) => {
    const addToCart = () => {
        console.log(product?.id);
    };

    return (
        <Container>
            {isProductPage && product?.image && (
                <ImageWrapper>
                    <Image
                        src={product.image.sourceUrl}
                        alt={product.name}
                        layout="fill"
                    />
                </ImageWrapper>
            )}

            {children}

            {isProductPage && (
                <Footer>
                    <FooterWrapper>
                        <Link href="/catalog" passHref>
                            <a>
                                <DotsMenu />
                            </a>
                        </Link>

                        <Button onClick={addToCart}>Добавить в корзину</Button>

                        <Link href="/card">
                            <a>
                                <CartButton>
                                    <CartCounter>2</CartCounter>
                                    <CartIcon />
                                </CartButton>
                            </a>
                        </Link>
                    </FooterWrapper>
                </Footer>
            )}
        </Container>
    );
};

export default CatalogLayout;
