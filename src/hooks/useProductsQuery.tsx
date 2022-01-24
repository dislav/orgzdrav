import { useLazyQuery } from '@apollo/client';

import {
    GetProductsQuery,
    GetProductsQueryProps,
} from '@graphql/queries/products';
import { RootQueryToProductTypeConnectionWhereArgs } from '@graphql/graphql';
import { QueryHookOptions } from '@apollo/client/react/types/types';

export const useProductsQuery = (
    options?: QueryHookOptions<
        GetProductsQueryProps,
        Partial<{
            where: {
                search?: string;
                orderby?: { field: string; order?: 'ASC' | 'DESC' }[];
                category?: string;
                categoryNotIn?: string;
            };
            first: number;
        }>
    >
) =>
    useLazyQuery<
        GetProductsQueryProps,
        Partial<{
            where: {
                search?: string;
                orderby?: { field: string; order?: 'ASC' | 'DESC' }[];
                category?: string;
                categoryNotIn?: string;
            };
            first: number;
        }>
    >(GetProductsQuery, options);
