import { gql } from '@apollo/client';
import { CartFragment } from '@graphql/fragments/cart';
import { GetCartQueryProps } from '@graphql/queries/cart';

export const UpdateItemQuantitiesMutation = gql`
    ${CartFragment}
    mutation updateItemQuantities($items: [CartItemQuantityInput]) {
        updateItemQuantities(input: { items: $items }) {
            cart {
                ...CartFragment
            }
        }
    }
`;

export interface UpdateItemQuantitiesMutationProps {
    updateItemQuantities: GetCartQueryProps;
}

export interface CartItemQuantityInputProps {
    items: {
        key: string;
        quantity: number;
    }[];
}
