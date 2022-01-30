import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPostsDocument, GetPostsQuery } from '@graphql';

import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import BlogList from '@layouts/BlogLayout/BlogList/BlogList';

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    posts,
}) => {
    return (
        <BlogLayout
            meta={{
                title: 'Блог',
            }}
            hideFooter
        >
            <BlogList posts={posts} />
        </BlogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: posts } = await client.query<GetPostsQuery>({
        query: GetPostsDocument,
        fetchPolicy: 'no-cache',
    });

    return {
        props: {
            posts: posts.posts?.nodes || [],
        },
        revalidate: 1,
    };
};

export default Blog;
