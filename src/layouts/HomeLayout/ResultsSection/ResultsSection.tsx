import React from 'react';

import {
    Container,
    Wrapper,
    Title,
    Row,
    Col,
    Value,
} from './ResultsSection.styled';

interface IResultsSection {
    className?: string;
}

const ResultsSection: React.FC<IResultsSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <Title>Результаты моей работы:</Title>
                <Row>
                    <Col>Провел не менее 150 надзорных мероприятий</Col>
                    <Col>Открыл более 250 клиник по всей стране</Col>
                    <Col>Подготовил свыше 1500 документов</Col>
                    <Col>Провел более 500 внутренних аудитов клиник</Col>
                </Row>
                <Row>
                    <Col>Отменил около 300 незаконных требований</Col>
                    <Col>Сопроводил не менее 200 проверок</Col>
                    <Col>Обучил более 8000 студентов и слушателей</Col>
                </Row>

                <Title>
                    Проект «OrgZdrav» направлен на оказание всего комплекса
                    услуг для клиник любого масштаба и специализации
                </Title>
                <Row>
                    <Col>
                        Оказание помощи клиникам уже более
                        <Value>3</Value> лет
                    </Col>
                    <Col>
                        Приобретено клиниками более
                        <Value>5 000</Value> документов
                    </Col>
                    <Col>
                        Обучение прошли более
                        <Value>4 000</Value> человек
                    </Col>
                    <Col>
                        Сэкономлено клиникам более
                        <Value>10 000 000</Value> рублей
                    </Col>
                </Row>
            </Wrapper>
        </Container>
    );
};

export default ResultsSection;
