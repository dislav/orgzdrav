import { gql } from '@apollo/client';
import {
    BillingProps,
    OrderFragment,
    OrderProps,
    OrderStatusEnum,
} from '@graphql/fragments/order';

export const CreateOrderMutation = gql`
    ${OrderFragment}
    mutation CreateOrderMutation($input: CreateOrderInput!) {
        createOrder(input: $input) {
            order {
                ...OrderFragment
            }
        }
    }
`;

export interface CreateOrderMutationQueryProps {
    input: {
        account?: {
            username: string;
            password: string;
        };
        billing: BillingProps;
        clientMutationId?: string;
        isPaid?: boolean;
        paymentMethod?: string;
        lineItems: Partial<{
            id: string;
            name: string;
            productId: number;
            quantity: number;
        }>[];
        status?: OrderStatusEnum;
    };
}

export interface CreateOrderMutationProps {
    createOrder: {
        order: OrderProps;
    };
}
