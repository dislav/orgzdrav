import React from 'react';

import { Container, Wrapper } from './HelpSection.styled';
import NumberList from '@components/NumberList/NumberList';

interface IHelpSection {
    className?: string;
}

const list = [
    'Подготовить к открытию клинику от проектирования и до получения СЭЗ и лицензии',
    'Привести в порядок всю внутреннюю документацию в клинике',
    'Подготовить и успешно пройти проверки Росздравнадзора и Роспотребнадзора',
    'Защититься от неправомерных требований надзорных органов или необоснованных претензий пациентов',
    'Научиться читать и понимать действующее законодательство, а также разбираться в нем',
];

const HelpSection: React.FC<IHelpSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <h2>Проект «OrgZdrav» поможет:</h2>
                <NumberList list={list} />
            </Wrapper>
        </Container>
    );
};

export default HelpSection;
