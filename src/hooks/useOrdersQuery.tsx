import { useLazyQuery, useQuery } from '@apollo/client';

import { GetOrdersQuery, GetOrdersQueryProps } from '@graphql/queries/orders';

export const useOrdersQuery = () =>
    useQuery<GetOrdersQueryProps>(GetOrdersQuery);

export const useOrderLazyQuery = () =>
    useLazyQuery<GetOrdersQueryProps>(GetOrdersQuery);
