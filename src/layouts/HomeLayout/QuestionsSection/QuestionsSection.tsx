import React from 'react';
import Link from 'next/link';

import { Container, Text } from './QuestionsSection.styled';
import Button from '@components/Button/Button';

const QuestionsSection: React.FC = () => {
    return (
        <Container id="questions">
            <Text>
                <h2>Остались вопросы?</h2>
                <p>
                    Перейдите в чат с экспертом и получите бесплатную
                    консультацию
                </p>
            </Text>

            <Button
                href="https://wa.me/+79135682515"
                padding="14px 30px"
                margin="0 0 40px"
            >
                Перейти в чат
            </Button>

            <Link href="/author">Информация об авторе проекта</Link>
        </Container>
    );
};

export default QuestionsSection;
