import React from 'react';

import {
    Container,
    Wrapper,
    Text,
    Row,
    Button,
} from './QuestionsSection.styled';
import { Telegram, Vk } from '@icons/icons';

const QuestionsSection: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                    <h2>Остались вопросы или нужна помощь?</h2>
                    <p>Напишите нам – и мы оперативно Вам поможем!</p>
                </Text>
                <Row>
                    <Button
                        href="https://vk.com/orgzdrav2019"
                        target="_blank"
                        icon={<Vk />}
                        options={{
                            variant: 'vk',
                        }}
                    >
                        Вконтакте
                    </Button>
                    <Button
                        href="https://t.me/+TTvAkkpKlyCjHXe4"
                        icon={<Telegram />}
                        options={{
                            fullWidth: true,
                            variant: 'telegram',
                        }}
                    >
                        Телеграм канал
                    </Button>
                    <Button
                        href="https://t.me/orgzdrav2019"
                        icon={<Telegram />}
                        options={{
                            fullWidth: true,
                            variant: 'telegram',
                        }}
                    >
                        Телеграм канал
                    </Button>
                </Row>
            </Wrapper>
        </Container>
    );
};

export default QuestionsSection;
