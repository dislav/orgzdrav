import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const GetProductQuery = gql`
    ${SimpleProductFragment}
    query GetProduct($id: ID!) {
        product(id: $id, idType: SLUG) {
            ...SimpleProductFragment
        }
    }
`;

export interface GetProductQueryProps {
    product: SimpleProductProps;
}
