import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { Container, Wrapper, Text } from './Footer.styled';

const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Link href="/payment-methods">Способы оплаты</Link>
                <Link href="/public-offer">Публичная оферта</Link>
                <Link href="/privacy-policy">Политика конфиденциальности</Link>
                <Text>
                    &reg; ORGZDRAV 2019 – {dayjs().year()}
                    <br />
                    &copy; Назимкин Иван Игоревич
                    <br />
                    All rights reserved.
                </Text>
            </Wrapper>
        </Container>
    );
};

export default Footer;
