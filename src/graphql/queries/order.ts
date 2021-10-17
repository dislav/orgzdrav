import { gql } from '@apollo/client';
import { OrderFragment, OrderProps } from '@graphql/fragments/order';

export const GetOrderQuery = gql`
    ${OrderFragment}
    query GetOrder($id: ID) {
        order(id: $id) {
            ...OrderFragment
        }
    }
`;

export interface GetOrderQueryProps {
    order: OrderProps;
}
