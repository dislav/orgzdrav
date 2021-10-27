import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    createHttpLink,
} from '@apollo/client';

export const middleware = new ApolloLink((operation, forward) => {
    const isBrowser = typeof window !== 'undefined';

    const token = isBrowser ? localStorage.getItem('authToken') : null;
    const session = isBrowser ? localStorage.getItem('woo-session') : null;

    if (session) {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                'woocommerce-session': `Session ${session}`,
                authorization: token ? `Bearer ${token}` : '',
            },
        }));
    }

    return forward(operation);
});

export const afterware = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        if (!process.browser) return response;

        const ctx = operation.getContext();
        const {
            response: { headers },
        } = ctx;
        const session = headers.get('woocommerce-session');

        if (session) {
            if (session === 'false') {
                localStorage.removeItem('woo-session');
            } else if (localStorage.getItem('woo-session') !== session) {
                localStorage.setItem(
                    'woo-session',
                    headers.get('woocommerce-session')
                );
            }
        }

        return response;
    });
});

export default new ApolloClient({
    link: middleware.concat(
        afterware.concat(
            createHttpLink({
                uri: 'https://api.orgzdrav2019.ru/graphql',
            })
        )
    ),
    cache: new InMemoryCache(),
});
