import React from 'react';

import { Container } from '@layouts/InformationLayout/InformationLayout.styled';
import { ILayout } from '@components/Layout/Layout';

const InformationLayout: React.FC<ILayout> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default InformationLayout;
