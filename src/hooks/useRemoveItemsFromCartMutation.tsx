import { useMutation } from '@apollo/client';
import {
    RemoveItemsFromCartMutation,
    RemoveItemsFromCartMutationProps,
    RemoveItemsFromCartMutationQueryProps,
} from '@graphql/mutations/removeItemsFromCart';

export const useRemoveItemsFromCartMutation = () =>
    useMutation<
        RemoveItemsFromCartMutationProps,
        RemoveItemsFromCartMutationQueryProps
    >(RemoveItemsFromCartMutation);
