import React from 'react';
import Link from 'next/link';

import { Post_Postmain_Content_SectionProduct } from '@graphql';

import Image from '@components/Image/Image';
import { Container, ImageWrapper, Content } from './SectionProduct.styled';

const SectionProduct: React.FC<Post_Postmain_Content_SectionProduct> = ({
    product,
}) => {
    return (
        <Link href={product?.slug ? `/catalog/${product.slug}` : ''} passHref>
            <Container>
                {product?.image?.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={product.image.sourceUrl}
                            alt={product?.name || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}

                <Content>
                    {product?.name && <h3>{product.name}</h3>}
                    {product?.price && (
                        <span
                            dangerouslySetInnerHTML={{ __html: product.price }}
                        />
                    )}
                </Content>
            </Container>
        </Link>
    );
};

export default SectionProduct;
