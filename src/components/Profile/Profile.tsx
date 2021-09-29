import React from 'react';
import { useSelector } from 'react-redux';

import { getUserAbbreviatedName, getUserName } from '@redux/user/selectors';

import { Container, Avatar } from './Profile.styled';

const Profile: React.FC = () => {
    const name = useSelector(getUserName);
    const abbreviatedName = useSelector(getUserAbbreviatedName);

    return (
        <Container>
            {name}
            <Avatar>{abbreviatedName}</Avatar>
        </Container>
    );
};

export default Profile;
