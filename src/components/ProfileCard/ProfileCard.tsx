import React, { useMemo } from 'react';

import { ViewerProps } from '@graphql/fragments/viewer';
import { Container, Content, Avatar, Info } from './ProfileCard.styled';
import ButtonLink from '@components/ButtonLink/ButtonLink';

interface IProfileCard {
    className?: string;
    profile: ViewerProps;
}

const ProfileCard: React.FC<IProfileCard> = ({ className, profile }) => {
    const fullName = `${profile.firstName}${
        profile.lastName ? ` ${profile.lastName}` : ''
    }`;

    const abbreviatedName = useMemo(() => {
        if (profile.firstName || profile.lastName) {
            return `${profile.firstName ? profile.firstName[0] : ''}${
                profile.lastName ? profile.lastName[0] : ''
            }`;
        }

        return profile.username[0];
    }, [profile]);

    return (
        <Container className={className}>
            <Content>
                <Avatar>{abbreviatedName}</Avatar>
                <Info>
                    <h3>{fullName}</h3>
                    <span>{profile.username}</span>
                </Info>
            </Content>
            <ButtonLink href="/profile/settings">
                Редактировать профиль
            </ButtonLink>
        </Container>
    );
};

export default ProfileCard;
