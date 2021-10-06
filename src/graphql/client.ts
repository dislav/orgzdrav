import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getToken } from '@graphql/utils';

const getAuthHeaders = () => {
    const token = getToken();

    return {
        authorization: token ? `Bearer ${token}` : '',
    };
};

const link = new HttpLink({
    uri: 'http://orgzdrav.loc/graphql',
    headers: getAuthHeaders(),
});

const cache = new InMemoryCache();

export default new ApolloClient({
    link,
    cache,
});
