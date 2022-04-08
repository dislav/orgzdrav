import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, Avatar, Info } from './ProfileCard.styled';
import ButtonLink from '@components/ButtonLink/ButtonLink';

import {
    getCustomer,
    getCustomerDisplayName,
    getCustomerShortName,
} from '@redux/customer/selectors';

interface IProfileCard {
    className?: string;
}

const ProfileCard: React.FC<IProfileCard> = ({ className }) => {
    const customer = useSelector(getCustomer);

    const displayName = useSelector(getCustomerDisplayName);
    const shortName = useSelector(getCustomerShortName);

    return (
        <Container className={className}>
            <Content>
                <Avatar>{shortName}</Avatar>
                <Info>
                    <h3>{displayName}</h3>
                    <span>@{customer.username}</span>
                </Info>
            </Content>
            <ButtonLink href="/profile/settings">
                Редактировать профиль
            </ButtonLink>
        </Container>
    );
};

export default ProfileCard;
