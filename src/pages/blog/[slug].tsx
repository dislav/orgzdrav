import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import client from '@graphql/client';
import { GetPostsQuery, GetPostsQueryProps } from '@graphql/queries/posts';
import { GetPostQuery, GetPostQueryProps } from '@graphql/queries/post';

import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import CommonComponents from '@components/CommonComponents/CommonComponents';

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    post,
}) => {
    return (
        <BlogLayout
            meta={{
                title: post.title,
                description: post.excerpt,
                image: post.featuredImage.node.sourceUrl,
            }}
        >
            <CommonComponents components={post.postMain.content} />
        </BlogLayout>
    );
};

export const getStaticPaths = async () => {
    const { data } = await client.query<GetPostsQueryProps>({
        query: GetPostsQuery,
        fetchPolicy: 'no-cache',
    });

    const paths = data.posts.nodes.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const { data: post } = await client.query<GetPostQueryProps>({
        query: GetPostQuery,
        fetchPolicy: 'no-cache',
        variables: { id: params?.slug },
    });

    return {
        props: {
            post: post.post,
        },
    };
};

export default Blog;
