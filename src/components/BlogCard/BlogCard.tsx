import React from 'react';
import Link from 'next/link';

import { PostFragment } from '@graphql';

import {
    Container,
    ImageWrapper,
    Content,
    Description,
} from './BlogCard.styled';
import Image from '@components/Image/Image';

interface IBlogCard extends PostFragment {
    className?: string;
}

const BlogCard: React.FC<IBlogCard> = ({
    className,
    slug,
    title,
    excerpt,
    featuredImage,
}) => {
    return (
        <Link href={`/blog/${slug}`} passHref>
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
                <Content>
                    <h3>{title}</h3>
                    {excerpt && (
                        <Description
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                    )}
                </Content>
            </Container>
        </Link>
    );
};

export default BlogCard;
