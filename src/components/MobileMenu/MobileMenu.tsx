import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ProfileWrapper, Content } from './MobileMenu.styled';
import Profile from '@components/Profile/Profile';

import { getIsLoggedIn } from '@redux/customer/selectors';

interface IMobileMenu {
    className?: string;
}

const MobileMenu: React.FC<IMobileMenu> = ({ className, children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Container className={className}>
            {isLoggedIn && (
                <ProfileWrapper>
                    <Profile />
                </ProfileWrapper>
            )}
            <Content>{children}</Content>
        </Container>
    );
};

export default MobileMenu;
