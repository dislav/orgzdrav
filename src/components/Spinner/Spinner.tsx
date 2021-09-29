import React from 'react';

import { Container } from './Spinner.styled';
import { Spinner as SpinnerIcon } from '@icons/icons';

const Spinner: React.FC = () => {
    return (
        <Container>
            <SpinnerIcon />
        </Container>
    );
};

export default Spinner;
