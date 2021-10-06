import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const GetProductsQuery = gql`
    ${SimpleProductFragment}
    query GetProducts($where: RootQueryToProductConnectionWhereArgs) {
        products(where: $where) {
            nodes {
                ...SimpleProductFragment
            }
        }
    }
`;

export interface GetProductsQueryProps {
    products: {
        nodes: SimpleProductProps[];
    };
}
