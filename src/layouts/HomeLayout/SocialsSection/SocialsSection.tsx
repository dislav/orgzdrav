import React from 'react';

import {
    Container,
    Wrapper,
    Row,
    Text,
    ButtonLink,
} from './SocialsSection.styled';
import { Facebook, Instagram, Telegram, Vk } from '@icons/icons';

const SocialsSection: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                    <h2>Мы в социальный сетях</h2>
                    <p>Подпишись, чтобы следить за новостями и акциями</p>
                </Text>

                <Row>
                    <ButtonLink
                        href="https://www.instagram.com/orgzdrav.2019/"
                        target="_blank"
                        icon={<Instagram />}
                        options={{ variant: 'instagram' }}
                    />
                    <ButtonLink
                        href="https://vk.com/orgzdrav2019"
                        target="_blank"
                        icon={<Vk />}
                        options={{
                            variant: 'vk',
                        }}
                    />
                    <ButtonLink
                        href="https://www.facebook.com/orgzdrav2019/"
                        target="_blank"
                        icon={<Facebook />}
                        options={{
                            variant: 'facebook',
                        }}
                    />
                </Row>

                <ButtonLink
                    href="tg://join?invite=TTvAkkpKlyCjHXe4"
                    icon={<Telegram />}
                    options={{
                        fullWidth: true,
                        variant: 'telegram',
                    }}
                >
                    Общий чат в телеграмм
                </ButtonLink>
            </Wrapper>
        </Container>
    );
};

export default SocialsSection;
