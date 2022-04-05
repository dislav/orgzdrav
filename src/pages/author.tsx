import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPageDocument, GetPageQuery, GetPageQueryVariables } from '@graphql';

import ContentSection from '@components/ContentSection/ContentSection';
import InfoLayout from '@layouts/InfoLayout/InfoLayout';
import Image from '@components/Image/Image';
import { Header } from '@layouts/InfoLayout/InfoLayout.styled';

const Author: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    page,
}) => {
    return (
        <InfoLayout meta={{ title: page?.title || 'Автор' }}>
            <Header>
                <Image
                    src="/images/IMG_8203.png"
                    alt={page?.title || ''}
                    width={467}
                    height={802}
                    objectFit="contain"
                />
            </Header>

            {page?.content && (
                <ContentSection
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />
            )}
        </InfoLayout>
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
