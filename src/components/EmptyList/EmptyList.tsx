import React from 'react';

import { Container } from './EmptyList.styled';
import { Sad } from '@icons/icons';

interface IEmptyList {
    className?: string;
}

const EmptyList: React.FC<IEmptyList> = ({ className, children }) => {
    return (
        <Container className={className}>
            {children}
            <Sad />
        </Container>
    );
};

export default EmptyList;
