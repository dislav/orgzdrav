import React from 'react';

import { Container, Row, Text } from './SocialsSection.styled';
import Button from '@components/Button/Button';
import { Facebook, Instagram, Telegram, Vk } from '@icons/icons';

const SocialsSection: React.FC = () => {
    return (
        <Container>
            <Text>
                <h2>Мы в социальный сетях</h2>
                <p>Подпишись, чтобы следить за новостями и акциями</p>
            </Text>

            <Row>
                <Button
                    href="https://www.instagram.com/orgzdrav.2019/"
                    icon={<Instagram />}
                    variant="instagram"
                />
                <Button
                    href="https://vk.com/orgzdrav2019"
                    icon={<Vk />}
                    variant="vk"
                />
                <Button
                    href="https://www.facebook.com/orgzdrav2019/"
                    icon={<Facebook />}
                    variant="facebook"
                />
            </Row>

            <Button href="tg://join?invite=TTvAkkpKlyCjHXe4" icon={<Telegram />} variant="telegram" fullWidth>
                Общий чат в телеграмм
            </Button>
        </Container>
    );
};

export default SocialsSection;
