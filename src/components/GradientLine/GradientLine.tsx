import React from 'react';

import { Container } from './GradientLine.styled';

const GradientLine: React.FC = ({ children }) => {
    return <Container hasChildren={!!children}>{children}</Container>;
};

export default GradientLine;
