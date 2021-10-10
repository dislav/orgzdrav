import React from 'react';

import { Container } from './FormErrors.styled';

interface IFormErrors {
    className?: string;
    messages: string[];
}

const FormErrors: React.FC<IFormErrors> = ({ className, messages }) => {
    const errors: {
        [key: string]: string;
    } = {
        invalid_username: 'Неверное имя пользователя',
        incorrect_password: 'Неверный пароль',
    };

    const getError = (code: string) => errors[code];

    return (
        <Container className={className}>
            {messages.map((code, index) => (
                <span key={index}>{getError(code) || code}</span>
            ))}
        </Container>
    );
};

export default FormErrors;
