import React, { useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ViewerFragment } from '@graphql';

import { Container, Avatar, Menu, Logout } from './Profile.styled';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

const Profile: React.FC<ViewerFragment> = ({
    firstName,
    lastName,
    username,
}) => {
    const router = useRouter();

    const menuContainer = useRef(null);
    const [menuActive, setMenuActive] = useState(false);

    useOnClickOutside(menuContainer, () => setMenuActive(false));

    const name = useMemo(() => {
        return `${firstName || ''}${lastName ? ` ${lastName}` : ''}`;
    }, [firstName, lastName]);

    const abbreviatedName = useMemo(() => {
        if (firstName || lastName) {
            return `${firstName ? firstName[0] : ''}${
                lastName ? lastName[0] : ''
            }`;
        }

        return username?.[0] || '';
    }, [firstName, lastName, username]);

    const onLogout = () => {
        localStorage.removeItem('authToken');
        router.reload();
    };

    return (
        <Container onClick={() => setMenuActive(true)}>
            {name}
            <Avatar>{abbreviatedName}</Avatar>

            {menuActive && (
                <Menu ref={menuContainer}>
                    <Link href="/profile">
                        <a>Профиль</a>
                    </Link>
                    <Link href="/orders">
                        <a>Заказы</a>
                    </Link>
                    <Logout onClick={onLogout}>Выйти</Logout>
                </Menu>
            )}
        </Container>
    );
};

export default Profile;
