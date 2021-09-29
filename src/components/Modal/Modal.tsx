import React from 'react';
import { createPortal } from 'react-dom';

import {Container, Backdrop, Content} from './Modal.styled';

interface IModal {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}

const Modal: React.FC<IModal> = ({ children, isOpen, onClose }) => {
    if (isOpen) {
        return createPortal(
            <Container>
                <Backdrop onClick={onClose} />
                <Content>{children}</Content>
            </Container>,
            document.getElementById('__next') as HTMLElement
        );
    }

    return null;
};

export default Modal;
