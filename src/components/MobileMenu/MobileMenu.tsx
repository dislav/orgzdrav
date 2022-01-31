import React from 'react';

import { ViewerFragment } from '@graphql';

import { Container, ProfileWrapper, Content } from './MobileMenu.styled';
import Profile from '@components/Profile/Profile';

interface IMobileMenu {
    className?: string;
    profile?: ViewerFragment;
}

const MobileMenu: React.FC<IMobileMenu> = ({
    className,
    profile,
    children,
}) => {
    return (
        <Container className={className}>
            {profile ? (
                <ProfileWrapper>
                    <Profile {...profile} />
                </ProfileWrapper>
            ) : (
                <div>Войти / Зарегистрироваться</div>
            )}
            <Content>{children}</Content>
        </Container>
    );
};

export default MobileMenu;
