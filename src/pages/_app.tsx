import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import '../../node_modules/swiper/swiper.min.css';

import { useStore } from '@redux/store';
import client from '@graphql/client';
import theme from '@theme/theme';
import GlobalStyle from '@theme/globalStyle';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

dayjs.extend(utc);

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const store = useStore(pageProps?.initialReduxState);
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    {getLayout(<Component {...pageProps} />)}
                    <GlobalStyle />
                </ThemeProvider>
            </ApolloProvider>
        </Provider>
    );
};

export default MyApp;
