import { useMutation } from '@apollo/client';
import {
    AddToCartMutation,
    AddToCartMutationOptionsProps,
    AddToCartMutationProps,
} from '@graphql/mutations/addToCart';

export const useAddToCartMutation = () =>
    useMutation<AddToCartMutationProps, AddToCartMutationOptionsProps>(
        AddToCartMutation
    );
