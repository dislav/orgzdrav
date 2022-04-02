import React from 'react';

import { Container } from './InfoLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const InfoLayout: React.FC<ILayout> = (props) => {
    return <Container {...props} />;
};

export default InfoLayout;
