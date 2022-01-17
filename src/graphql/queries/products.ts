import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const GetProductsQuery = gql`
    ${SimpleProductFragment}
    query GetProducts(
        $first: Int
        $where: RootQueryToProductConnectionWhereArgs
    ) {
        products(first: $first, where: $where) {
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
