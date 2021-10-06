import { gql } from '@apollo/client';
import { SimpleProductFragment } from '@graphql/fragments/simpleProduct';

export const CartFragment = gql`
    ${SimpleProductFragment}
    fragment CartFragment on Cart {
        isEmpty
        total
        shippingTotal
        contentsTotal
        discountTotal
        contents {
            itemCount
            productCount
            nodes {
                key
                total
                quantity
                product {
                    node {
                        ...SimpleProductFragment
                    }
                }
            }
        }
    }
`;
