import React from 'react';
import Image from 'next/image';

import {
    Container,
    Wrapper,
    Author,
    Button,
    Content,
} from './AuthorSection.styled';

interface IAuthorSection {
    className?: string;
}

const AuthorSection: React.FC<IAuthorSection> = ({ className }) => {
    return (
        <Container className={className}>
            <Wrapper>
                <Author>
                    <Image
                        src="/images/IMG_8016.png"
                        alt=""
                        width={1835}
                        height={4111}
                    />
                    <Button href="/author">Узнать обо мне подробнее</Button>
                </Author>
                <Content>
                    <h4>Основатель и куратор Проекта «OrgZdrav»</h4>
                    <h3>Назимкин Иван Игоревич</h3>
                    <p>
                        Организатор здравоохранения, врач-эпидемиолог,
                        специалист по медицинской деятельности и медицинскому
                        праву
                    </p>
                    <ul>
                        <li>
                            Выпускник Кемеровской государственной медицинской
                            академии
                        </li>
                        <li>
                            Бывший инспектор Управления Роспотребнадзора,
                            референт государственной гражданской службы 3 класса
                        </li>
                        <li>
                            Преподаватель по организации здравоохранения и
                            медицинскому праву в Учебном центре «Проф-Мед»,
                            автор собственных семинаров и вебинаров
                        </li>
                        <li>
                            Работал в Саморегулируемой организации Союз
                            медицинских организаций «Медальянс» в должности
                            специалиста по санитарно-эпидемиологической работе и
                            исполнительного директора
                        </li>
                        <li>
                            В прошлом – преподаватель кафедры гигиены
                            Красноярского государственного медицинского
                            университета им. В.Ф. Войно- Ясенецкого
                        </li>
                    </ul>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default AuthorSection;
