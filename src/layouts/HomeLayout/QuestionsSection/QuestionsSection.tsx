import React from 'react';
import Link from 'next/link';

import { Container, Text, ButtonLink } from './QuestionsSection.styled';

const QuestionsSection: React.FC = () => {
    return (
        <Container>
            <Text>
                <h2>Остались вопросы?</h2>
                <p>
                    Перейдите в чат с экспертом и получите бесплатную
                    консультацию
                </p>
            </Text>

            <ButtonLink href="https://wa.me/+79135682515">
                Перейти в чат
            </ButtonLink>

            <Link href="/author">Информация об авторе проекта</Link>
        </Container>
    );
};

export default QuestionsSection;
