import React from 'react';

import { Container, Wrapper, Value } from './AboutSection.styled';

interface IAboutSection {
    className?: string;
}

const list: string[] = [
    'Будете знать, что проверяют инспекторы и как вести себя на проверках',
    'Пройдете лицензирование от проектирования клиники до получения лицензии',
    'С нуля организуете весь документооборот в клинике',
    'Не потратите силы и время на то, что не нужно или потом придется переделывать',
    'Сэкономите значительные суммы на стоимости документов и штрафах',
    'Перестанете бояться звонков и запросов из надзорных органов',
    'Сможете ответить на любые самые сложные вопросы проверяющих и пациентов',
];

const AboutSection: React.FC<IAboutSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <h2>С нашим проектом Вы:</h2>
                <ol>
                    {list.map((text, index) => {
                        const value = index + 1;

                        return (
                            <li key={index}>
                                <Value>
                                    {value >= 10 ? value : `0${value}`}
                                </Value>
                                {text}
                            </li>
                        );
                    })}
                </ol>
            </Wrapper>
        </Container>
    );
};

export default AboutSection;
