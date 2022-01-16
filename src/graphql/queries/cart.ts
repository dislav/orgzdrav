import { gql } from '@apollo/client';
import { CartFragment, CartProps } from '@graphql/fragments/cart';

export const GetCartQuery = gql`
    ${CartFragment}
    query GetCart {
        cart {
            ...CartFragment
        }
    }
`;

export interface CouponProps {
    code: string;
    discountAmount: string;
    discountTax: string;
}

export interface GetCartQueryProps {
    cart: CartProps;
}
