import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';
import {
    GetPartnersDocument,
    GetPartnersQuery,
    GetPeopleReviewsDocument,
    GetPeopleReviewsQuery,
    PartnerFragment,
    PeopleReviewFragment,
} from '@graphql';

import HomeLayout from '@layouts/HomeLayout/HomeLayout';
import HeroSection from '@layouts/HomeLayout/HeroSection/HeroSection';
import ReviewsSection from '@layouts/HomeLayout/ReviewsSection/ReviewsSection';
import PartnersSection from '@layouts/HomeLayout/PartnersSection/PartnersSection';
import QuestionsSection from '@layouts/HomeLayout/QuestionsSection/QuestionsSection';
import AboutSection from '@layouts/HomeLayout/AboutSection/AboutSection';
import AuthorSection from '@layouts/HomeLayout/AuthorSection/AuthorSection';
import ResultsSection from '@layouts/HomeLayout/ResultsSection/ResultsSection';
import ForSection from '@layouts/HomeLayout/ForSection/ForSection';
import HelpSection from '@layouts/HomeLayout/HelpSection/HelpSection';
import StepsSection from '@layouts/HomeLayout/StepsSection/StepsSection';

const Index: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    reviews,
    partners,
}) => {
    return (
        <HomeLayout>
            <HeroSection />
            <AboutSection />
            <AuthorSection />
            <ResultsSection />
            <ForSection />
            <HelpSection />
            <StepsSection />
            <ReviewsSection reviews={reviews as PeopleReviewFragment[]} />
            <PartnersSection partners={partners as PartnerFragment[]} />
            <QuestionsSection />
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
