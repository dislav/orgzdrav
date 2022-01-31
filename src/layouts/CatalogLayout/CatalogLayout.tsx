import React from 'react';
import Image from 'next/image';

import {
    Container,
    Wrapper,
    ImageWrapper,
    ImageCover,
    Content,
    Price,
    Categories,
} from './CatalogLayout.styled';

import { ILayout } from '@components/Layout/Layout';

const CatalogLayout: React.FC<ILayout> = ({ children, product, ...props }) => {
    return (
        <Container {...props} product={product}>
            {product && (
                <Wrapper>
                    <ImageWrapper>
                        {product?.image?.sourceUrl && (
                            <ImageCover>
                                <Image
                                    src={product.image.sourceUrl}
                                    alt={product.name || ''}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageCover>
                        )}
                    </ImageWrapper>

                    <Content>
                        <Categories>
                            {product?.productCategories?.nodes &&
                                product.productCategories.nodes.length > 0 &&
                                product?.productCategories.nodes.map(
                                    (category) => (
                                        <span key={category?.slug}>
                                            {category?.name}
                                        </span>
                                    )
                                )}
                        </Categories>

                        {product?.name && <h2>{product.name}</h2>}

                        {product?.regularPrice && (
                            <Price
                                regularPrice={product.regularPrice}
                                salePrice={product.salePrice}
                            />
                        )}
                    </Content>
                </Wrapper>
            )}

            {children}
        </Container>
    );
};

export default CatalogLayout;
