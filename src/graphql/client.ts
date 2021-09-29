import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getToken } from '@graphql/utils';

const getAuthHeaders = () => {
    const token = getToken();

    return {
        authorization: token ? `Bearer ${token}` : '',
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
