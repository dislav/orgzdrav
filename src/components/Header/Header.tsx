import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import {
    Container,
    Wrapper,
    Links,
    Login,
    SandwichIcon,
    SandwichModal,
} from './Header.styled';
import Modal from '@components/Modal/Modal';
import Profile from '@components/Profile/Profile';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import AuthModal from '@components/Header/AuthModal/AuthModal';
import ClientOnly from '@components/ClientOnly/ClientOnly';
import { useConfig } from '@context/configProvider';
import { getIsLoggedIn, getProfile } from '@redux/profile/selectors';

const Header: React.FC = () => {
    const links = useConfig().header.links;

    const profile = useSelector(getProfile);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const openLoginModal = () => setIsLoginModal(true);
    const closeLoginModal = () => setIsLoginModal(false);

    const openMobileMenu = () => setIsMobileMenu(true);
    const closeMobileMenu = () => setIsMobileMenu(false);

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
                            <Login onClick={openLoginModal}>
                                Войти / Зарегистрироваться
                            </Login>
                        )}
                    </ClientOnly>
                </Links>

                <SandwichIcon onClick={openMobileMenu}>
                    <span />
                </SandwichIcon>
            </Wrapper>

            <SandwichModal isOpen={isMobileMenu} onClose={closeMobileMenu}>
                <MobileMenu profile={profile}>{renderLinks()}</MobileMenu>
            </SandwichModal>

            <Modal isOpen={isLoginModal} onClose={closeLoginModal}>
                <AuthModal />
            </Modal>
        </Container>
    );
};

export default Header;
