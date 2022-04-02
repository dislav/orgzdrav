import React from 'react';
import Link from 'next/link';

import { Container, Wrapper, Text, Row, Button } from './Footer.styled';
import { Telegram, Vk } from '@icons/icons';

const Footer: React.FC = () => {
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
                        Группа Вконтакте
                    </Button>
                    <Button
                        href="https://t.me/+TTvAkkpKlyCjHXe4"
                        icon={<Telegram />}
                        options={{
                            fullWidth: true,
                            variant: 'telegram',
                        }}
                    >
                        Телеграм-чат
                    </Button>
                    <Button
                        href="https://t.me/orgzdrav2019"
                        icon={<Telegram />}
                        options={{
                            fullWidth: true,
                            variant: 'telegram',
                        }}
                    >
                        Телеграм-канал
                    </Button>
                </Row>

                <Text>
                    &reg; ORGZDRAV.2019
                    <br />
                    &copy; Назимкин Иван Игоревич
                    <br />
                    All rights reserved.
                </Text>

                <Link href="/public-offer">Публичная оферта</Link>
                <Link href="/privacy-policy">Политика конфиденциальности</Link>
                <Link href="/payment-methods">Способы оплаты</Link>

                <Text>
                    Любое использование либо копирование материалов или подборки
                    материалов сайта, элементов дизайна и оформления допускается
                    лишь с разрешения правообладателя и только со ссылкой на
                    источник:{' '}
                    <a href="https://orgzdrav.org">www.orgzdrav.org</a>
                </Text>
            </Wrapper>
        </Container>
    );
};

export default Footer;
