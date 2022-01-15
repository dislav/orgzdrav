import React from 'react';
import Image from 'next/image';
import { Skeleton } from '@mui/material';

import { Container, ImageWrapper } from './CatalogLayout.styled';

import { ILayout } from '@components/Layout/Layout';

interface ICatalogLayout extends ILayout {
    isFallback?: boolean;
}

const CatalogLayout: React.FC<ICatalogLayout> = ({
    children,
    product,
    isFallback,
    ...props
}) => {
    return (
        <Container {...props} product={product}>
            {isFallback && (
                <Skeleton variant="rectangular" width={820} height={820} />
            )}

            {!isFallback && product?.image && (
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
