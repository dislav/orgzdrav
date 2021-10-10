import React from 'react';
import Image from 'next/image';

import { Container, ImageWrapper } from './CatalogLayout.styled';

import { ILayout } from '@components/Layout/Layout';

const CatalogLayout: React.FC<ILayout> = ({ children, product, ...props }) => {
    return (
        <Container {...props} product={product}>
            {product?.image && (
                <ImageWrapper>
                    <Image
                        src={product.image.sourceUrl}
                        alt={product.name}
                        layout="fill"
                    />
                </ImageWrapper>
            )}
            {children}
        </Container>
    );
};

export default CatalogLayout;
