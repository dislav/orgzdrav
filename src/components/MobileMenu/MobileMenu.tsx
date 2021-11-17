import React from 'react';

import { ViewerProps } from '@graphql/fragments/viewer';
import { Container, ProfileWrapper, Content } from './MobileMenu.styled';
import Profile from '@components/Profile/Profile';

interface IMobileMenu {
    className?: string;
    profile?: ViewerProps;
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
