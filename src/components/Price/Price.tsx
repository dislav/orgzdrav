import React from 'react';

import { Container, OldPrice, PriceWrapper } from './Price.styled';

interface IPrice {
    className?: string;
    regularPrice: string;
    salePrice?: string | null;
}

const Price: React.FC<IPrice> = ({ className, regularPrice, salePrice }) => {
    return (
        <Container className={className}>
            <PriceWrapper
                dangerouslySetInnerHTML={{
                    __html: salePrice || regularPrice,
                }}
            />

            {salePrice && (
                <OldPrice dangerouslySetInnerHTML={{ __html: regularPrice }} />
            )}
        </Container>
    );
};

export default Price;
