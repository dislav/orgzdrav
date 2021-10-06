import React from 'react';
import Image from 'next/image';

import { Container, ImageWrapper } from './Layout.styled';
import Header from '@components/Header/Header';
import Meta from '@components/Meta/Meta';
import Footer from '@components/Footer/Footer';

interface ILayout {
    className?: string;
}

const Layout: React.FC<ILayout> = ({ className, children }) => {
    return (
        <>
            <ImageWrapper>
                <Image
                    src="/images/bg.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </ImageWrapper>

            <Meta />
            <Header />
            <Container className={className}>{children}</Container>
            <Footer />
        </>
    );
};

export default Layout;
