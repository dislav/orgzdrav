import { gql } from '@apollo/client';
import { OrderFragment, OrderProps } from '@graphql/fragments/order';

export const GetOrdersQuery = gql`
    ${OrderFragment}
    query GetOrders {
        orders {
            nodes {
                ...OrderFragment
            }
        }
    }
`;

export interface GetOrdersQueryProps {
    orders: {
        nodes: OrderProps[];
    };
}
