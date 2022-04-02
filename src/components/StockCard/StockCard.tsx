import React from 'react';

import { StockFragment } from '@graphql';

import { Container, Content, ImageWrapper } from './StockCard.styled';
import Image from '@components/Image/Image';

interface IStockCard extends StockFragment {
    className?: string;
}

const StockCard: React.FC<IStockCard> = ({
    className,
    title,
    content,
    featuredImage,
}) => {
    return (
        <Container className={className}>
            {featuredImage?.node?.sourceUrl && (
                <ImageWrapper>
                    <Image
                        src={featuredImage.node.sourceUrl}
                        alt={title || ''}
                        layout="fill"
                        objectFit="cover"
                    />
                </ImageWrapper>
            )}
            {content && (
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </Container>
    );
};

export default StockCard;
