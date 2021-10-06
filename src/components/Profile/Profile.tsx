import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import {useRouter} from "next/router";

import { getUserAbbreviatedName, getUserName } from '@redux/user/selectors';

import { Container, Avatar, Menu } from './Profile.styled';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

const Profile: React.FC = () => {
    const router = useRouter();

    const menuContainer = useRef(null);
    const [menuActive, setMenuActive] = useState(false);

    useOnClickOutside(menuContainer, () => setMenuActive(false));

    const name = useSelector(getUserName);
    const abbreviatedName = useSelector(getUserAbbreviatedName);

    const onLogout = () => {
        localStorage.removeItem('authToken');
        router.reload();
    };

    return (
        <Container onClick={() => setMenuActive(true)}>
            {name}
            <Avatar>{abbreviatedName}</Avatar>

            {menuActive && (
                <Menu isMenuActive={menuActive} ref={menuContainer}>
                    <button onClick={onLogout}>Выйти</button>
                </Menu>
            )}
        </Container>
    );
};

export default Profile;
