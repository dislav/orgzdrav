import React from 'react';

import { Container } from './Spinner.styled';
import { Spinner as SpinnerIcon } from '@icons/icons';

interface ISpinner {
    className?: string;
}

const Spinner: React.FC<ISpinner> = ({ className }) => {
    return (
        <Container className={className}>
            <SpinnerIcon />
        </Container>
    );
};

export default Spinner;
