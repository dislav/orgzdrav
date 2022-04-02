import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, Avatar, Info } from './ProfileCard.styled';
import ButtonLink from '@components/ButtonLink/ButtonLink';

import { getProfile } from '@redux/profile/selectors';

interface IProfileCard {
    className?: string;
}

const ProfileCard: React.FC<IProfileCard> = ({ className }) => {
    const profile = useSelector(getProfile);

    const fullName = `${profile.firstName}${
        profile.lastName ? ` ${profile.lastName}` : ''
    }`;

    const abbreviatedName = useMemo(() => {
        if (profile.firstName || profile.lastName) {
            return `${profile.firstName ? profile.firstName[0] : ''}${
                profile.lastName ? profile.lastName[0] : ''
            }`;
        }

        return profile?.username?.[0] || '';
    }, [profile]);

    return (
        <Container className={className}>
            <Content>
                <Avatar>{abbreviatedName}</Avatar>
                <Info>
                    <h3>{fullName}</h3>
                    <span>@{profile.username}</span>
                </Info>
            </Content>
            <ButtonLink href="/profile/settings">
                Редактировать профиль
            </ButtonLink>
        </Container>
    );
};

export default ProfileCard;
