import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPageDocument, GetPageQuery, GetPageQueryVariables } from '@graphql';

import InfoLayout from '@layouts/InfoLayout/InfoLayout';
import ContentSection from '@components/ContentSection/ContentSection';

const PublicOffer: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    page,
}) => {
    return (
        <InfoLayout meta={{ title: page?.title || 'Публичная оферта' }}>
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
        variables: { id: 'public-offer' },
    });

    return {
        props: {
            page: page.page,
        },
        revalidate: 60,
    };
};

export default PublicOffer;
