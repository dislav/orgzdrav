import React from 'react';
import { createPortal } from 'react-dom';

import { Container, Backdrop, Content, Close } from './Modal.styled';

interface IModal {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}

const Modal: React.FC<IModal> = ({ children, className, isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        <Container className={className}>
            <Backdrop onClick={onClose} />
            <Content>
                <Close onClick={onClose} />
                {children}
            </Content>
        </Container>,
        document.getElementById('__next') as HTMLElement
    );
};

export default Modal;
