import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    createHttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const AUTH_TOKEN = 'authToken';
const WOO_SESSION = 'woo-session';

export const middleware = new ApolloLink((operation, forward) => {
    const isBrowser = typeof window !== 'undefined';

    let wooHeaders = {};

    const token = isBrowser ? localStorage.getItem(AUTH_TOKEN) : null;
    const session = isBrowser ? localStorage.getItem(WOO_SESSION) : null;
    const hasSession = token || session;

    if (token) {
        wooHeaders = {
            ...wooHeaders,
            authorization: `Bearer ${token}`,
        };
    } else if (session) {
        wooHeaders = {
            ...wooHeaders,
            'woocommerce-session': `Session ${session}`,
        };
    }

    if (hasSession) {
        operation.setContext(({ headers = {} }) => ({
            headers: wooHeaders,
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
                localStorage.removeItem(WOO_SESSION);
            } else if (localStorage.getItem(WOO_SESSION) !== session) {
                localStorage.setItem(
                    WOO_SESSION,
                    headers.get('woocommerce-session')
                );
            }
        }

        return response;
    });
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(`[GraphQL Error]: Message: ${message}`);

            if (
                (path?.includes('customer') || path?.includes('cart')) &&
                message === 'Internal server error'
            ) {
                localStorage.removeItem(WOO_SESSION);
                localStorage.removeItem(AUTH_TOKEN);
            }
        });

    if (networkError) console.log(`[Network Error]: ${networkError}`);
});

export default new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(
        middleware.concat(
            afterware.concat(
                createHttpLink({
                    uri: 'https://api.orgzdrav2019.ru/graphql',
                })
            )
        )
    ),
    cache: new InMemoryCache(),
});
