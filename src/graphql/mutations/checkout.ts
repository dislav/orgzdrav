import { gql } from '@apollo/client';
import {BillingProps, OrderFragment, OrderProps} from '@graphql/fragments/order';

export const CheckoutMutation = gql`
    ${OrderFragment}
    mutation CheckoutMutation($input: CheckoutInput!) {
        checkout(input: $input) {
            result
            order {
                ...OrderFragment
            }
        }
    }
`;

export interface CheckoutMutationQueryProps {
    input: {
        account?: {
            username: string;
            password: string;
        };
        billing: BillingProps;
        clientMutationId?: string;
        isPaid?: boolean;
        paymentMethod: string;
    };
}

export interface CheckoutMutationProps {
    checkout: {
        result: string;
        order: OrderProps;
    };
}
