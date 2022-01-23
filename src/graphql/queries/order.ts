import { gql } from '@apollo/client';
import { OrderFragment, OrderProps } from '@graphql/fragments/order';

export const GetOrderQuery = gql`
    ${OrderFragment}
    query GetOrder($id: ID, $idType: OrderIdTypeEnum = DATABASE_ID) {
        order(id: $id, idType: $idType) {
            ...OrderFragment
        }
    }
`;

export interface GetOrderQueryProps {
    order: OrderProps;
}
