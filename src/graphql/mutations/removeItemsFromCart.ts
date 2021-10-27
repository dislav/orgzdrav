import { gql } from '@apollo/client';

export const RemoveItemsFromCartMutation = gql`
    mutation RemoveItemsFromCartMutation($input: RemoveItemsFromCartInput!) {
        removeItemsFromCart(input: $input) {
            clientMutationId
        }
    }
`;

export interface RemoveItemsFromCartMutationQueryProps {
    input: {
        keys: string[];
    };
}

export interface RemoveItemsFromCartMutationProps {
    removeItemsFromCart: {
        clientMutationId: string;
    };
}
