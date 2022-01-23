import React from 'react';

import { Container, ContentSection } from './ContactsCard.styled';

interface IContactsCard {
    className?: string;
    content: string;
}

const ContactsCard: React.FC<IContactsCard> = ({ className, content }) => {
    return (
        <Container className={className}>
            <ContentSection dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
    );
};

export default ContactsCard;
