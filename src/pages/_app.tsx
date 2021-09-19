import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import '../../node_modules/swiper/swiper.min.css';

import client from '@graphql/client';
import theme from '@theme/theme';
import GlobalStyle from '@theme/globalStyle';
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <GlobalStyle />
            </ThemeProvider>
        </ApolloProvider>
    );
}
export default MyApp;
