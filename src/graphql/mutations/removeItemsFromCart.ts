import { gql } from '@apollo/client';
import { CartFragment, CartProps } from "@graphql/fragments/cart"

export const RemoveItemsFromCartMutation = gql`
    ${CartFragment}
    mutation RemoveItemsFromCartMutation($input: RemoveItemsFromCartInput!) {
        removeItemsFromCart(input: $input) {
            clientMutationId
            cart {
                ...CartFragment
            }
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
        cart: CartProps;
    };
}
