import { gql } from '@apollo/client';
import {
    SimpleProductFragment,
    SimpleProductProps,
} from '@graphql/fragments/simpleProduct';

export const GetProductCategoriesQuery = gql`
    ${SimpleProductFragment}
    query GetProductCategories {
        productCategories {
            nodes {
                slug
                name
                products {
                    nodes {
                        ...SimpleProductFragment
                    }
                }
            }
        }
    }
`;

export interface ProductCategoryProps {
    slug: string;
    name: string;
    products: {
        nodes: SimpleProductProps[];
    };
}

export interface GetProductCategoriesQueryProps {
    productCategories: {
        nodes: ProductCategoryProps[];
    };
}
