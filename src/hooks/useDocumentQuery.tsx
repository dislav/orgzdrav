import { useLazyQuery } from '@apollo/client';

import {
    GetDocumentQuery,
    GetDocumentQueryProps,
    GetDocumentQueryVariables,
} from '@graphql/queries/document';
import { QueryHookOptions } from '@apollo/client/react/types/types';

export const useDocumentQuery = (
    options?: QueryHookOptions<GetDocumentQueryProps, GetDocumentQueryVariables>
) =>
    useLazyQuery<GetDocumentQueryProps, GetDocumentQueryVariables>(
        GetDocumentQuery,
        options
    );
