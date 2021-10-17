import { gql } from '@apollo/client';

export const RemoveCouponsMutation = gql`
    mutation removeCouponsMutation($input: RemoveCouponsInput!) {
        removeCoupons(input: $input) {
            clientMutationId
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
    };
}
