import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import client from '@graphql/client';
import { GetPageDocument, GetPageQuery, GetPageQueryVariables } from '@graphql';

import ContentSection from '@components/ContentSection/ContentSection';
import Layout from '@components/Layout/Layout';

const Author: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    page,
}) => {
    return (
        <Layout meta={{ title: page?.title || 'Автор' }}>
            <Image
                src="/images/pages/author.png"
                alt={page?.title || ''}
                width={1080}
                height={571}
            />

            {page?.content && (
                <ContentSection
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />
            )}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data: page } = await client.query<
        GetPageQuery,
        GetPageQueryVariables
    >({
        query: GetPageDocument,
        fetchPolicy: 'no-cache',
        variables: { id: 'author' },
    });

    return {
        props: {
            page: page.page,
        },
        revalidate: 1,
    };
};

export default Author;
