import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import '../../node_modules/swiper/swiper.min.css';

import client from '@graphql/client';
import theme from '@theme/theme';
import GlobalStyle from '@theme/globalStyle';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                {getLayout(<Component {...pageProps} />)}
                <GlobalStyle />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
