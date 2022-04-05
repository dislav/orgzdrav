import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Container,
    Logo,
    Links,
    SandwichIcon,
    SandwichModal,
    Login,
} from './Header.styled';
import Profile from '@components/Profile/Profile';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import ClientOnly from '@components/ClientOnly/ClientOnly';

import { useConfig } from '@context/configProvider';
import { getIsLoggedIn, getProfile } from '@redux/profile/selectors';
import { useTogglable } from '@hooks/useTogglable';

const Header: React.FC = () => {
    const router = useRouter();

    const links = useConfig().header.links;

    const profile = useSelector(getProfile);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const { isOpen, onOpen, onClose } = useTogglable();

    const renderLinks = useCallback(
        () =>
            links.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.title}
                </Link>
            )),
        [links]
    );

    return (
        <Container>
            <Links>
                <Link href="/" passHref>
                    <Logo>
                        <img src="/images/logo.jpg" alt="" />
                    </Logo>
                </Link>

                {renderLinks()}

                <ClientOnly>
                    {isLoggedIn ? (
                        <Profile {...profile} />
                    ) : (
                        <Login onSuccessAuth={router.reload}>Войти</Login>
                    )}
                </ClientOnly>
            </Links>

            <SandwichIcon onClick={onOpen}>
                <span />
            </SandwichIcon>

            <SandwichModal isOpen={isOpen} onClose={onClose}>
                <MobileMenu profile={profile}>{renderLinks()}</MobileMenu>
            </SandwichModal>
        </Container>
    );
};

export default Header;
