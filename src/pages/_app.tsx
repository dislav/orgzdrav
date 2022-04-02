import React from 'react';
import { AppProps } from 'next/app';
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
import ConfigProvider from '../context/configProvider';
import '@theme/fonts.css';

dayjs.extend(utc);

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps?.initialReduxState);

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <ConfigProvider>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                        <GlobalStyle />
                    </ThemeProvider>
                </ConfigProvider>
            </ApolloProvider>
        </Provider>
    );
};

export default MyApp;
