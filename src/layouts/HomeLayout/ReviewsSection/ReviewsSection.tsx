import React from 'react';
import Image from 'next/image';
import Swiper, { SwiperOptions, Pagination, Keyboard } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { PeopleReviewProps } from '@graphql/types';
import { Container, Header, Slider } from './ReviewsSection.styled';
import { ArrowRight } from '@icons/icons';

interface IReviewsSection {
    reviews: PeopleReviewProps[];
}

Swiper.use([Pagination, Keyboard]);

const ReviewsSection: React.FC<IReviewsSection> = ({ reviews }) => {
    const options: SwiperOptions = {
        speed: 600,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            clickable: true,
        },
        grabCursor: true,
        slideToClickedSlide: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    };

    return (
        <Container>
            <Header>
                <h2>Ваши отзывы о нас</h2>
                <ArrowRight />
            </Header>
            <Slider {...options}>
                {reviews?.map(
                    (review, index) =>
                        review.reviewMain?.image?.sourceUrl && (
                            <SwiperSlide key={index}>
                                <Image
                                    src={review.reviewMain?.image?.sourceUrl}
                                    width={820}
                                    height={820}
                                />
                            </SwiperSlide>
                        )
                )}
            </Slider>
        </Container>
    );
};

export default ReviewsSection;
