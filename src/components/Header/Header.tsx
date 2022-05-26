import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import {
    Container,
    Logo,
    Links,
    SandwichIcon,
    SandwichModal,
    Login,
    Link,
} from './Header.styled';
import Profile from '@components/Profile/Profile';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import ClientOnly from '@components/ClientOnly/ClientOnly';

import { getIsLoggedIn } from '@redux/customer/selectors';
import { useConfig } from '@context/configProvider';
import { useTogglable } from '@hooks/useTogglable';

const Header: React.FC = () => {
    const router = useRouter();

    const { ymCode } = useConfig().global;
    const links = useConfig().header.links;

    const isLoggedIn = useSelector(getIsLoggedIn);

    const { isOpen, onOpen, onClose } = useTogglable();

    const onClickLink = (id?: string) => () => {
        if (id) {
            // @ts-ignore
            ym(ymCode, 'reachGoal', id);
        }
    };

    const renderLinks = useMemo(
        () =>
            links.map((link, index) => (
                <NextLink key={index} href={link.href} passHref>
                    <Link
                        color={link.color}
                        target={link.isNewTab ? '_blank' : '_self'}
                        onClick={onClickLink(link.ymID)}
                    >
                        {link.title}
                    </Link>
                </NextLink>
            )),
        [links]
    );

    return (
        <Container>
            <Links>
                <NextLink href="/" passHref>
                    <Logo>
                        <img src="/images/logo.jpg" alt="" />
                    </Logo>
                </NextLink>

                {renderLinks}

                <ClientOnly>
                    {isLoggedIn ? (
                        <Profile />
                    ) : (
                        <Login onSuccessAuth={router.reload}>Войти</Login>
                    )}
                </ClientOnly>
            </Links>

            <SandwichIcon onClick={onOpen}>
                <span />
            </SandwichIcon>

            <SandwichModal isOpen={isOpen} onClose={onClose}>
                <MobileMenu>{renderLinks}</MobileMenu>
            </SandwichModal>
        </Container>
    );
};

export default Header;
