import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const getAuthHeaders = () => {
    if (typeof window === 'undefined') return null;
    const token = localStorage?.getItem('token');

    return {
        authorization: `Bearer ${token || ''}`,
    };
};

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://orgzdrav.loc/graphql',
        headers: getAuthHeaders(),
    }),
    cache: new InMemoryCache(),
});

export default client;
