import React from 'react';

import { Container, Wrapper, Title, Footer, Button } from './ForSection.styled';
import { Telegram, Vk } from '@icons/icons';

interface IForSection {
    className?: string;
}

const ForSection: React.FC<IForSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <Title>Для кого создан Проект «OrgZdrav»?</Title>
                <ol>
                    <li>
                        Подготовить к открытию клинику от проектирования и до
                        получения СЭЗ и лицензии
                    </li>
                    <li>
                        Привести в порядок всю внутреннюю документацию в клинике
                    </li>
                    <li>
                        Подготовить и успешно пройти проверки Росздравнадзора и
                        Роспотребнадзора
                    </li>
                    <li>
                        Защититься от неправомерных требований надзорных органов
                        или необоснованных претензий пациентов
                    </li>
                    <li>
                        Научиться читать и понимать действующее
                        законодательство, а также разбираться в нем
                    </li>
                </ol>

                <Title>
                    Оставайтесь с нами на связи удобным для Вас способом
                </Title>
                <Footer>
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
                </Footer>
            </Wrapper>
        </Container>
    );
};

export default ForSection;
