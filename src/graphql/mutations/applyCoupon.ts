import { gql } from '@apollo/client';
import { CartFragment, CartProps } from '@graphql/fragments/cart';

export const ApplyCouponMutation = gql`
    ${CartFragment}
    mutation applyCouponMutation($input: ApplyCouponInput!) {
        applyCoupon(input: $input) {
            clientMutationId
            cart {
                ...CartFragment
            }
        }
    }
`;

export interface ApplyCouponMutationQueryProps {
    input: {
        code: string;
    };
}

export interface ApplyCouponMutationProps {
    applyCoupon: {
        clientMutationId: string;
        cart: CartProps;
    };
}
