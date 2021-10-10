import React from 'react';
import { ApolloError } from '@apollo/client';

export const collectErrors = (
    e: ApolloError,
    setState: React.Dispatch<string[]>
) => {
    const messages = (e as ApolloError)?.graphQLErrors.map(
        ({ message }) => message
    );

    setState(messages);
};
