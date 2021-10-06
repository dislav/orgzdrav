import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';

import { getToken } from '@graphql/utils';
import { GetViewerQuery, GetViewerQueryProps } from '@graphql/queries/viewer';
import { GetCartQuery, GetCartQueryProps } from '@graphql/queries/cart';
import { getIsLoggedIn } from '@redux/user/selectors';
import { setCart } from '@redux/cart/actions';
import { setUser } from '@redux/user/actions';

import { Container, Wrapper, Links, Login } from './Header.styled';
import Modal from '@components/Modal/Modal';
import LoginForm from '@components/LoginForm/LoginForm';
import Profile from '@components/Profile/Profile';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(getIsLoggedIn);
    const [isLoginModal, setIsLoginModal] = useState(false);

    const authToken = getToken();

    const {
        data: profile,
        refetch: updateProfile,
        loading,
    } = useQuery<GetViewerQueryProps>(GetViewerQuery, {
        skip: !authToken,
    });

    const { data: cart, refetch: updateCart } = useQuery<GetCartQueryProps>(
        GetCartQuery,
        {
            skip: !isLoggedIn,
        }
    );

    const openLoginModal = () => setIsLoginModal(true);
    const closeLoginModal = () => setIsLoginModal(false);

    useMemo(() => {
        if (cart?.cart) dispatch(setCart(cart.cart));
    }, [cart, dispatch]);

    useMemo(() => {
        if (profile?.viewer) dispatch(setUser(profile.viewer));
    }, [profile, dispatch]);

    const onLoginSuccess = () => {
        closeLoginModal();
        updateProfile();
        updateCart();
    };

    return (
        <Container>
            <Wrapper>
                <Links>
                    <Link href="/">
                        <a>Главная</a>
                    </Link>

                    <ScrollLink to="catalog" smooth offset={-80}>
                        Каталог
                    </ScrollLink>
                    <ScrollLink to="reviews" smooth offset={-80}>
                        Отзывы
                    </ScrollLink>
                    <ScrollLink to="questions" smooth offset={-80}>
                        Чат
                    </ScrollLink>

                    {!loading && (
                        <>
                            {isLoggedIn ? (
                                <Profile />
                            ) : (
                                <Login onClick={openLoginModal}>
                                    Войти / Зарегистрироваться
                                </Login>
                            )}
                        </>
                    )}
                </Links>
            </Wrapper>

            <Modal isOpen={isLoginModal} onClose={closeLoginModal}>
                <LoginForm onSuccess={onLoginSuccess} />
            </Modal>
        </Container>
    );
};

export default Header;
