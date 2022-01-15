import React, { useState, useCallback } from 'react';
import Link from 'next/link';

import { ViewerProps } from '@graphql/fragments/viewer';

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
import { useConfig } from '@context/configProvider';

interface IHeader {
    profile?: ViewerProps;
}

const Header: React.FC<IHeader> = ({ profile }) => {
    const links = useConfig().header.links;

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

                    {profile ? (
                        <Profile {...profile} />
                    ) : (
                        <Login onClick={openLoginModal}>
                            Войти / Зарегистрироваться
                        </Login>
                    )}
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
