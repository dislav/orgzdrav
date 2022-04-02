import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import client from '@graphql/client';
import { GetPageDocument, GetPageQuery, GetPageQueryVariables } from '@graphql';

import InfoLayout from '@layouts/InfoLayout/InfoLayout';
import ContentSection from '@components/ContentSection/ContentSection';

const PrivacyPolicy: React.FC<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ page }) => {
    return (
        <InfoLayout
            meta={{ title: page?.title || 'Политика конфиденциальности' }}
        >
            <Image
                src="/images/pages/privacy-policy.png"
                alt={page?.title || ''}
                width={1080}
                height={590}
            />

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
        variables: { id: 'privacy-policy' },
    });

    return {
        props: {
            page: page.page,
        },
        revalidate: 60,
    };
};

export default PrivacyPolicy;
