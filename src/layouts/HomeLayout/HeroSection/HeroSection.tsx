import React from 'react';
import Image from 'next/image';

import {
    Container,
    Wrapper,
    Content,
    Buttons,
    Button,
    Title,
    List,
    ImageWrapper,
} from './HeroSection.styled';

interface IHeroSection {
    className?: string;
}

const HeroSection: React.FC<IHeroSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <Title>
                    Проект «OrgZdrav» – правовая поддержка и защита интересов
                    клиник и врачей
                </Title>
                <Content>
                    <p>
                        Решим Ваши вопросы по организации медицинской
                        деятельности:
                    </p>
                    <List>
                        <li>
                            Обучим всем тонкостям медицинского законодательства
                        </li>
                        <li>
                            Предоставим все необходимые документы для открытия
                            или ведения деятельности
                        </li>
                        <li>
                            Подготовим к любым проверкам Роспотребнадзора и
                            Росздравнадзор
                        </li>
                        <li>Ответим на все самые сложные вопросы</li>
                    </List>
                    <Buttons>
                        <Button href="/catalog">Получить документы</Button>
                        <Button href="/services">Пройти проверку</Button>
                        <Button href="/webinars">Посетить вебинар</Button>
                    </Buttons>
                </Content>
                <ImageWrapper>
                    <Image
                        src="/images/IMG_8203.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default HeroSection;
