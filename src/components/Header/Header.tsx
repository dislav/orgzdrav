import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { ViewerProps } from '@graphql/fragments/viewer';

import { Container, Wrapper, Links, Login } from './Header.styled';
import Modal from '@components/Modal/Modal';
import Profile from '@components/Profile/Profile';
import AuthForm from '@components/AuthForm/AuthForm';

interface IHeader {
    profile?: ViewerProps;
}

const Header: React.FC<IHeader> = ({ profile }) => {
    const [isLoginModal, setIsLoginModal] = useState(false);

    const openLoginModal = () => setIsLoginModal(true);
    const closeLoginModal = () => setIsLoginModal(false);

    return (
        <Container>
            <Wrapper>
                <Links>
                    <Link href="/">
                        <a>Главная</a>
                    </Link>

                    <Link href="/catalog">
                        <a>Каталог</a>
                    </Link>

                    <ScrollLink to="reviews" smooth offset={-80}>
                        Отзывы
                    </ScrollLink>

                    <ScrollLink to="questions" smooth offset={-80}>
                        Чат
                    </ScrollLink>

                    {profile ? (
                        <Profile {...profile} />
                    ) : (
                        <Login onClick={openLoginModal}>
                            Войти / Зарегистрироваться
                        </Login>
                    )}
                </Links>
            </Wrapper>

            <Modal isOpen={isLoginModal} onClose={closeLoginModal}>
                <AuthForm />
            </Modal>
        </Container>
    );
};

export default Header;
