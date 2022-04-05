import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPageDocument, GetPageQuery, GetPageQueryVariables } from '@graphql';

import ContentSection from '@components/ContentSection/ContentSection';
import InfoLayout from '@layouts/InfoLayout/InfoLayout';

const Contacts: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    page,
}) => {
    return (
        <InfoLayout meta={{ title: page?.title || 'Контакты' }}>
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
        variables: { id: 'contacts' },
    });

    return {
        props: {
            page: page.page,
        },
        revalidate: 1,
    };
};

export default Contacts;
