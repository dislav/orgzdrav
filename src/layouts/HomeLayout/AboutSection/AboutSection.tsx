import React from 'react';

import { Container, Wrapper } from './AboutSection.styled';

interface IAboutSection {
    className?: string;
}

const AboutSection: React.FC<IAboutSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <h2>С нашим проектом Вы:</h2>
                <ol>
                    <li>
                        Будете знать, что проверяют инспекторы и как вести себя
                        на проверках
                    </li>
                    <li>
                        Пройдете лицензирование от проектирования клиники до
                        получения лицензии
                    </li>
                    <li>С нуля организуете весь документооборот в клинике</li>
                    <li>
                        Не потратите силы и время на то, что не нужно или потом
                        придется переделывать
                    </li>
                    <li>
                        Сэкономите значительные суммы на стоимости документов и
                        штрафах
                    </li>
                    <li>
                        Перестанете бояться звонков и запросов из надзорных
                        органов
                    </li>
                    <li>
                        Сможете ответить на любые самые сложные вопросы
                        проверяющих и пациентов
                    </li>
                </ol>
            </Wrapper>
        </Container>
    );
};

export default AboutSection;
