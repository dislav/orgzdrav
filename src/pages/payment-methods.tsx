import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import client from '@graphql/client';
import { GetPageQuery, GetPageQueryProps } from '@graphql/queries/page';

import Layout from '@components/Layout/Layout';
import ContentSection from '@components/ContentSection/ContentSection';

const PaymentMethods: React.FC<InferGetStaticPropsType<typeof getStaticProps>> =
    ({ page }) => {
        return (
            <Layout meta={{ title: page.title }}>
                <Image
                    src="/images/pages/payment-methods.png"
                    alt={page.title}
                    width={1080}
                    height={579}
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
        variables: { id: 'payment-methods' },
    });

    return {
        props: {
            page: page.page,
        },
    };
};

export default PaymentMethods;