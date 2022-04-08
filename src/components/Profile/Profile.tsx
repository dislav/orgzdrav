import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, Avatar, Menu, Logout } from './Profile.styled';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import {
    getCustomerDisplayName,
    getCustomerShortName,
} from '@redux/customer/selectors';

const Profile: React.FC = () => {
    const router = useRouter();

    const displayName = useSelector(getCustomerDisplayName);
    const shortName = useSelector(getCustomerShortName);

    const menuContainer = useRef(null);
    const [menuActive, setMenuActive] = useState(false);

    useOnClickOutside(menuContainer, () => setMenuActive(false));

    const onLogout = () => {
        localStorage.removeItem('authToken');
        router.reload();
    };

    return (
        <Container onClick={() => setMenuActive(true)}>
            {displayName}
            <Avatar>{shortName}</Avatar>

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
