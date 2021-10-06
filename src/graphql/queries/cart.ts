import { gql } from '@apollo/client';
import { SimpleProductProps } from '@graphql/fragments/simpleProduct';
import { CartFragment } from '@graphql/fragments/cart';

export const GetCartQuery = gql`
    ${CartFragment}
    query GetCart {
        cart {
            ...CartFragment
        }
    }
`;

export interface GetCartQueryProps {
    cart: {
        isEmpty: boolean;
        total: string;
        shippingTotal: string;
        contentsTotal: string;
        discountTotal: string;
        contents: {
            itemCount: number;
            productCount: number;
            nodes: {
                key: string;
                quantity: number;
                total: string;
                product: {
                    node: SimpleProductProps;
                };
            }[];
        };
    };
}
