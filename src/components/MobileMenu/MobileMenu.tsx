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
            {profile?.id && (
                <ProfileWrapper>
                    <Profile {...profile} />
                </ProfileWrapper>
            )}
            <Content>{children}</Content>
        </Container>
    );
};

export default MobileMenu;
