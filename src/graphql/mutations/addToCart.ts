import { gql } from '@apollo/client';
import { CartFragment } from '@graphql/fragments/cart';
import { GetCartQueryProps } from '@graphql/queries/cart';

export const AddToCartMutation = gql`
    ${CartFragment}
    mutation addToCart($productId: Int!) {
        addToCart(input: { productId: $productId }) {
            cart {
                ...CartFragment
            }
        }
    }
`;

export interface AddToCartMutationOptionsProps {
    productId: number;
}

export interface AddToCartMutationProps {
    addToCart: {
        cart: GetCartQueryProps['cart'];
    };
}
