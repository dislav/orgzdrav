import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetPostDocument,
    GetPostQuery,
    GetPostQueryVariables,
    GetPostsDocument,
    GetPostsQuery,
} from '@graphql';

import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import CommonComponents from '@components/CommonComponents/CommonComponents';
import DownloadFiles from '@layouts/BlogLayout/DownloadFiles/DownloadFiles';

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    post,
}) => {
    return (
        <BlogLayout
            meta={{
                title: post?.title || '',
                description: post?.excerpt || '',
                image: post?.featuredImage?.node?.sourceUrl,
            }}
        >
            {post?.postMain?.files && post.postMain.files.length > 0 && (
                <DownloadFiles files={post.postMain.files} />
            )}

            {post?.postMain?.content && post.postMain.content.length > 0 && (
                <CommonComponents components={post.postMain.content} />
            )}
        </BlogLayout>
    );
};

export const getStaticPaths = async () => {
    const { data } = await client.query<GetPostsQuery>({
        query: GetPostsDocument,
        fetchPolicy: 'no-cache',
    });

    const paths =
        data.posts?.nodes?.map((post) => ({
            params: { slug: post?.slug },
        })) || [];

    return { paths, fallback: false };
};

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ slug: string }>) => {
    const { data: post } = await client.query<
        GetPostQuery,
        GetPostQueryVariables
    >({
        query: GetPostDocument,
        fetchPolicy: 'no-cache',
        variables: { id: params?.slug || '' },
    });

    return {
        props: {
            post: post.post,
        },
        revalidate: 1,
    };
};

export default Blog;
