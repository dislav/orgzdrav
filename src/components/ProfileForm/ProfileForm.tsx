import React from 'react';

import { Container } from './ProfileForm.styled';

interface IProfileForm {
    className?: string;
}

const ProfileForm: React.FC<IProfileForm> = ({ className }) => {
    return (
      <Container className={className}>

      </Container>
    )
}

export default ProfileForm;
