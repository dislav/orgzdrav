import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import { GetPageQuery, GetPageQueryProps } from '@graphql/queries/page';

import Layout from '@components/Layout/Layout';
import Meta from '@components/Meta/Meta';
import ContentSection from '@components/ContentSection/ContentSection';

const PaymentMethods: React.FC<InferGetStaticPropsType<typeof getStaticProps>> =
    ({ page }) => {
        return (
            <Layout>
                {page.title && <Meta title={page.title} />}
                <ContentSection
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />
            </Layout>
        );
    };

export const getStaticProps = async () => {
    const { data: page } = await client.query<GetPageQueryProps>({
        query: GetPageQuery,
        variables: { id: 'payment-methods' },
    });

    return {
        props: {
            page: page.page,
        },
    };
};

export default PaymentMethods;
