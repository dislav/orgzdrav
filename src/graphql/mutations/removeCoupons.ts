import { gql } from '@apollo/client';
import { CartFragment, CartProps } from '@graphql/fragments/cart';

export const RemoveCouponsMutation = gql`
    ${CartFragment}
    mutation removeCouponsMutation($input: RemoveCouponsInput!) {
        removeCoupons(input: $input) {
            clientMutationId
            cart {
                ...CartFragment
            }
        }
    }
`;

export interface RemoveCouponsMutationQueryProps {
    input: {
        codes: string[];
    };
}

export interface RemoveCouponsMutationProps {
    removeCoupons: {
        clientMutationId: string;
        cart: CartProps;
    };
}
