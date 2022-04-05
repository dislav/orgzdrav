import React from 'react';
import Link from 'next/link';

import { Post_Postmain_Content_SectionLink } from '@graphql';

import { Container, ImageWrapper, Content } from './SectionLink.styled';
import Image from '@components/Image/Image';

const SectionLink: React.FC<Post_Postmain_Content_SectionLink> = ({ post }) => {
    return (
        <Link href={post?.slug ? `/blog/${post.slug}` : ''} passHref>
            <Container>
                {post?.featuredImage?.node?.sourceUrl && (
                    <ImageWrapper>
                        <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post?.title || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageWrapper>
                )}

                <Content>
                    {post?.title && <h3>{post.title}</h3>}
                    {post?.excerpt && (
                        <span
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                    )}
                </Content>
            </Container>
        </Link>
    );
};

export default SectionLink;
