import React from 'react';

import {
    Container,
    Wrapper,
    Title,
    Steps,
    Step,
    Button,
} from './StepsSection.styled';

interface IStepsSection {
    className?: string;
}

const StepsSection: React.FC<IStepsSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <Title>3 шага для решения Ваших вопросов:</Title>
                <Steps>
                    <Step>
                        <span>Привести в порядок документацию:</span>
                        <ol>
                            <li>Перейти в Каталог документов</li>
                            <li>
                                Выбрать необходимые документы и добавить их в
                                корзину
                            </li>
                            <li>
                                Войти под своим логином или зарегистрироваться и
                                оформить заказ
                            </li>
                        </ol>
                        <Button href="/catalog">
                            Перейти в Каталог документов
                        </Button>
                    </Step>

                    <Step>
                        <span>Подготовиться и пройти проверки:</span>
                        <ol>
                            <li>Перейти Каталог услуг и аудитов</li>
                            <li>
                                Выбрать необходимый вид аудита и добавить его в
                                корзину
                            </li>
                            <li>
                                Войти под своим логином или зарегистрироваться и
                                оформить заказ
                            </li>
                        </ol>
                        <Button href="/catalog">
                            Перейти в Каталог услуг и аудитов
                        </Button>
                    </Step>

                    <Step>
                        <span>Получить знания и полезный опыт:</span>
                        <ol>
                            <li>Перейти в Каталог вебинаров</li>
                            <li>
                                Выбрать вебинар по интересующей теме и добавить
                                его в корзину
                            </li>
                            <li>
                                Войти под своим логином или зарегистрироваться и
                                оформить заказ
                            </li>
                        </ol>
                        <Button href="/catalog">
                            Перейти в Каталог вебинаров
                        </Button>
                    </Step>
                </Steps>
            </Wrapper>
        </Container>
    );
};

export default StepsSection;
