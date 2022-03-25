import React from 'react';

import { Container } from './ProfileLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const ProfileLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default ProfileLayout;
