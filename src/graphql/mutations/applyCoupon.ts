import { gql } from '@apollo/client';

export const ApplyCouponMutation = gql`
    mutation applyCouponMutation($input: ApplyCouponInput!) {
        applyCoupon(input: $input) {
            clientMutationId
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
    };
}
