import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const GetProductsQuery = gql`
    ${SimpleProductFragment}
    query GetProducts {
        products {
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
