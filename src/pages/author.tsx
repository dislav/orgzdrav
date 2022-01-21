import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import client from '@graphql/client';
import { GetPageQuery, GetPageQueryProps } from '@graphql/queries/page';

import ContentSection from '@components/ContentSection/ContentSection';
import Layout from '@components/Layout/Layout';

const Author: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    page,
}) => {
    return (
        <Layout meta={{ title: page.title }}>
            <Image
                src="/images/pages/author.png"
                alt={page.title}
                width={1080}
                height={571}
            />
            <ContentSection
                dangerouslySetInnerHTML={{ __html: page.content }}
            />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data: page } = await client.query<GetPageQueryProps>({
        query: GetPageQuery,
        fetchPolicy: 'no-cache',
        variables: { id: 'author' },
    });

    return {
        props: {
            page: page.page,
        },
    };
};

export default Author;
