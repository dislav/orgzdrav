import React from 'react';
import Image from 'next/image';

import { Container, ImageWrapper } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <ImageWrapper>
                <Image src="/images/bg.jpg" layout="fill" objectFit="cover" />
            </ImageWrapper>

            <Meta />
            <Header />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

export default Layout;
