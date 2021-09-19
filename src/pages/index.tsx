import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import client from '@graphql/client';
import {
    GetPartnersDocument,
    GetPartnersQuery,
    GetReviewsDocument,
    GetReviewsQuery,
    Review,
    Partner,
} from '@graphql/graphql';
import HomeLayout from '@layouts/HomeLayout/HomeLayout';
import ReviewsSection from '@layouts/HomeLayout/ReviewsSection/ReviewsSection';

import Button from '@components/Button/Button';
import TextSection from '@components/TextSection/TextSection';
import GradientLine from '@components/GradientLine/GradientLine';

import { ArrowsDown, Telegram } from '@icons/icons';
import PartnersSection from '@layouts/HomeLayout/PartnersSection/PartnersSection';
import SocialsSection from '@layouts/HomeLayout/SocialsSection/SocialsSection';
import QuestionsSection from '@layouts/HomeLayout/QuestionsSection/QuestionsSection';

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    reviews,
    partners,
}) => {
    const { white } = useTheme().colors;

    return (
        <HomeLayout>
            <Image src="/images/1.png" width={500} height={500} />

            <Button
                href="/catalog"
                id="catalog"
                padding="16px 20px"
                fullWidth
                flare
            >
                Посмотреть каталог
            </Button>

            <TextSection
                title="ВНИМАНИЕ!!!"
                color={white}
                textAlign="center"
                margin="40px 0"
            >
                <p>
                    В&nbsp;связи с&nbsp;большим количеством заявок
                    на&nbsp;обновление и приобретение Пакетов документов,
                    возможны задержки в обработке заявок.
                </p>
                <p>
                    ‌Все заявки обязательно будут обработаны и&nbsp;ответ
                    поступит по СМС или электронной почте&nbsp;&mdash; следите
                    за&nbsp;поступающими сообщениями!
                </p>
                <p>
                    ‌При оформлении Спецпакета &laquo;А&raquo; или Спецпакета
                    &laquo;Б&raquo; обязательно должны быть выбраны (поставлены
                    галочки) обновляемые документы, указана электронная почта
                    с&nbsp;которой оформлялся заказ ранее и&nbsp;указана
                    приблизительная дата покупки.
                </p>
                <p>
                    ‌Заявки без данной информации рассматриваться не&nbsp;будут!
                </p>
            </TextSection>

            <Button
                href="tg://join?invite=TTvAkkpKlyCjHXe4"
                icon={<Telegram />}
                id="catalog"
                variant="telegram"
                padding="16px 20px"
                fullWidth
            >
                Телеграм-чат проекта OrgZdrav
            </Button>

            <Image src="/images/2.png" width={820} height={820} />

            <TextSection color={white} textAlign="center">
                <p>*Оплата от организации возможна при заказе от 10.000 руб.</p>
            </TextSection>

            <GradientLine />

            <Image src="/images/3.png" width={500} height={422} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <Image src="/images/4.png" width={500} height={488} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <Image src="/images/5.png" width={500} height={440} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <ReviewsSection reviews={reviews as Review[]} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <PartnersSection partners={partners as Partner[]} />

            <TextSection color={white} textAlign="center" margin="20px 0 40px">
                <p>
                    За текущий год мы отправили клиентам 2000 пакетов документов
                </p>
            </TextSection>

            <Button id="catalog" padding="16px 20px" fullWidth>
                Посмотреть каталог
            </Button>

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <QuestionsSection />

            <GradientLine />

            <SocialsSection />
        </HomeLayout>
    );
};

export const getStaticProps = async () => {
    const { data: reviews } = await client.query<GetReviewsQuery>({
        query: GetReviewsDocument,
    });

    const { data: partners } = await client.query<GetPartnersQuery>({
        query: GetPartnersDocument,
    });

    return {
        props: {
            reviews: reviews.reviews?.nodes,
            partners: partners.partners?.nodes,
        },
    };
};

export default Index;
