import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPostsQuery, GetPostsQueryProps } from '@graphql/queries/posts';

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
        >
            <BlogList posts={posts} />
        </BlogLayout>
    );
};

export const getStaticProps = async () => {
    const { data: posts } = await client.query<GetPostsQueryProps>({
        query: GetPostsQuery,
        fetchPolicy: 'no-cache',
    });

    return {
        props: {
            posts: posts.posts.nodes,
        },
    };
};

export default Blog;
