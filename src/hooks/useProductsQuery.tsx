import { useQuery } from '@apollo/client';

import {
    GetProductsQuery,
    GetProductsQueryProps,
} from '@graphql/queries/products';
import { RootQueryToProductTypeConnectionWhereArgs } from '@graphql/graphql';
import { QueryHookOptions } from '@apollo/client/react/types/types';

export const useProductsQuery = (
    options?: QueryHookOptions<
        GetProductsQueryProps,
        { where: RootQueryToProductTypeConnectionWhereArgs }
    >
) =>
    useQuery<
        GetProductsQueryProps,
        { where: RootQueryToProductTypeConnectionWhereArgs }
    >(GetProductsQuery, options);
