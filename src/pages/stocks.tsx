import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetStocksDocument,
    GetStocksQuery,
    GetStocksQueryVariables,
    StockFragment,
} from '@graphql';

import { List } from '@layouts/StocksLayout/StocksLayout.styled';
import StocksLayout from '@layouts/StocksLayout/StocksLayout';
import Heading from '@components/Heading/Heading';
import EmptyList from '@components/EmptyList/EmptyList';
import StockCard from '@components/StockCard/StockCard';

const Stocks: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    stocks,
}) => {
    return (
        <StocksLayout>
            <Heading
                title="Проект «OrgZdrav»"
                subtitle="Получите максимальную выгоду с акциями и скидками"
            />
            {stocks.length > 0 ? (
                <List>
                    {stocks.map((stock) => (
                        <StockCard key={stock.id} {...stock} />
                    ))}
                </List>
            ) : (
                <EmptyList>Список пуст</EmptyList>
            )}
        </StocksLayout>
    );
};

export const getStaticProps = async () => {
    const { data: stocks } = await client.query<
        GetStocksQuery,
        GetStocksQueryVariables
    >({ query: GetStocksDocument, variables: { first: 100 } });

    return {
        props: {
            stocks: stocks.stocks?.nodes as StockFragment[],
        },
        revalidate: 1,
    };
};

export default Stocks;
