import React from 'react';

import { Container, Wrapper } from './HelpSection.styled';

interface IHelpSection {
    className?: string;
}

const HelpSection: React.FC<IHelpSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <h2>Проект «OrgZdrav» поможет:</h2>
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
            </Wrapper>
        </Container>
    );
};

export default HelpSection;
