import React from 'react';
import { useTrail, a, useSpring } from 'react-spring';

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
import Image from '@components/Image/Image';

interface IHeroSection {
    className?: string;
}

const list: string[] = [
    'Обучим всем тонкостям медицинского законодательства',
    'Предоставим все необходимые документы для открытия или ведения деятельности',
    'Подготовим к любым проверкам Роспотребнадзора и Росздравнадзор',
    'Ответим на все самые сложные вопросы',
];

const controls = [
    {
        title: 'Получить документы',
        href: '/catalog',
    },
    {
        title: 'Пройти проверку',
        href: '/services',
    },
    {
        title: 'Посетить вебинар',
        href: '/webinars',
    },
];

const HeroSection: React.FC<IHeroSection> = ({ className }) => {
    const animation = {
        from: { y: 40, opacity: 0 },
        opacity: 1,
        y: 0,
    };

    const [title] = useSpring(() => animation);
    const trail = useTrail(list.length, animation);
    const controlsTrail = useTrail(controls.length, animation);

    return (
        <Container className={className}>
            <Wrapper>
                <Title style={title}>
                    Проект «OrgZdrav» – правовая поддержка и защита интересов
                    клиник и врачей
                </Title>
                <Content>
                    <p>
                        Решим Ваши вопросы по организации медицинской
                        деятельности:
                    </p>
                    <List>
                        {trail.map(({ y, ...style }, index) => (
                            <a.li
                                key={index}
                                style={{
                                    ...style,
                                    transform: y.to(
                                        (val) => `translateY(${val}px)`
                                    ),
                                }}
                            >
                                {list[index]}
                            </a.li>
                        ))}
                    </List>
                    <Buttons>
                        {controlsTrail.map(({ y, ...style }, index) => (
                            <a.div
                                key={index}
                                style={{
                                    ...style,
                                    transform: y.to(
                                        (val) => `translateY(${val}px)`
                                    ),
                                }}
                            >
                                <Button href={controls[index].href}>
                                    {controls[index].title}
                                </Button>
                            </a.div>
                        ))}
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
