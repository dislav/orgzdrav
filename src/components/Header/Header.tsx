import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Container,
    Wrapper,
    Links,
    Login,
    SandwichIcon,
    SandwichModal,
} from './Header.styled';
import Profile from '@components/Profile/Profile';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import AuthButton from '@components/AuthButton/AuthButton';
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
            <Wrapper>
                <Links>
                    {renderLinks()}

                    <ClientOnly>
                        {isLoggedIn ? (
                            <Profile {...profile} />
                        ) : (
                            <AuthButton
                                onSuccessAuth={router.reload}
                                renderButton={(onClick) => (
                                    <Login onClick={onClick}>
                                        Войти / Зарегистрироваться
                                    </Login>
                                )}
                            />
                        )}
                    </ClientOnly>
                </Links>

                <SandwichIcon onClick={onOpen}>
                    <span />
                </SandwichIcon>
            </Wrapper>

            <SandwichModal isOpen={isOpen} onClose={onClose}>
                <MobileMenu profile={profile}>{renderLinks()}</MobileMenu>
            </SandwichModal>
        </Container>
    );
};

export default Header;
