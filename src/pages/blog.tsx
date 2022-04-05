import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPostsDocument, GetPostsQuery, PostFragment } from '@graphql';

import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import BlogList from '@layouts/BlogLayout/BlogList/BlogList';
import Heading from '@components/Heading/Heading';
import EmptyList from '@components/EmptyList/EmptyList';

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    posts,
}) => {
    return (
        <BlogLayout
            meta={{
                title: 'Блог',
            }}
        >
            <Heading
                title="Проект «OrgZdrav»"
                subtitle="Получите разъяснения по самым сложным вопросам"
            />
            {posts.length > 0 ? (
                <BlogList posts={posts as PostFragment[]} />
            ) : (
                <EmptyList>Список статей пуст</EmptyList>
            )}
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
