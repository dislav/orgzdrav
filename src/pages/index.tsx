import React from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import client from '@graphql/client';
import {
    GetPartnersDocument,
    GetPartnersQuery,
    GetPeopleReviewsDocument,
    GetPeopleReviewsQuery,
} from '@graphql';

import HomeLayout from '@layouts/HomeLayout/HomeLayout';
import ReviewsSection from '@layouts/HomeLayout/ReviewsSection/ReviewsSection';
import PartnersSection from '@layouts/HomeLayout/PartnersSection/PartnersSection';
import SocialsSection from '@layouts/HomeLayout/SocialsSection/SocialsSection';
import QuestionsSection from '@layouts/HomeLayout/QuestionsSection/QuestionsSection';
import TextSection from '@components/TextSection/TextSection';
import GradientLine from '@components/GradientLine/GradientLine';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import { ArrowsDown, Telegram } from '@icons/icons';

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    reviews,
    partners,
}) => {
    const { white } = useTheme().colors;

    return (
        <HomeLayout>
            <Image src="/images/1.png" alt="" width={500} height={500} />

            <ButtonLink
                href="/catalog"
                options={{
                    flare: true,
                    fullWidth: true,
                }}
            >
                Посмотреть каталог
            </ButtonLink>

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

            <ButtonLink
                href="tg://join?invite=TTvAkkpKlyCjHXe4"
                icon={<Telegram />}
                options={{
                    variant: 'telegram',
                    fullWidth: true,
                }}
            >
                Телеграм-чат проекта OrgZdrav
            </ButtonLink>

            <Image src="/images/2.png" alt="" width={820} height={820} />

            <TextSection color={white} textAlign="center">
                <p>*Оплата от организации возможна при заказе от 10.000 руб.</p>
            </TextSection>

            <GradientLine />

            <Image src="/images/3.png" alt="" width={500} height={422} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <Image src="/images/4.png" alt="" width={500} height={488} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <Image src="/images/5.png" alt="" width={500} height={440} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <ReviewsSection reviews={reviews} />

            <GradientLine>
                <ArrowsDown />
            </GradientLine>

            <PartnersSection partners={partners} />

            <TextSection color={white} textAlign="center" margin="20px 0 40px">
                <p>
                    За текущий год мы отправили клиентам 2000 пакетов документов
                </p>
            </TextSection>

            <ButtonLink
                href="/catalog"
                options={{
                    fullWidth: true,
                }}
            >
                Посмотреть каталог
            </ButtonLink>

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
    const { data: reviews } = await client.query<GetPeopleReviewsQuery>({
        query: GetPeopleReviewsDocument,
        fetchPolicy: 'no-cache',
    });

    const { data: partners } = await client.query<GetPartnersQuery>({
        query: GetPartnersDocument,
        fetchPolicy: 'no-cache',
    });

    return {
        props: {
            partners: partners.partners?.nodes || [],
            reviews: reviews.peopleReviews?.nodes || [],
        },
        revalidate: 1,
    };
};

export default Index;
