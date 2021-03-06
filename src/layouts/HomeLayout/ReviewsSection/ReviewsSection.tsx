import React from 'react';
import { SwiperOptions, Pagination, Keyboard } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { PeopleReviewFragment } from '@graphql';
import { Container, Header, Slider } from './ReviewsSection.styled';
import { ArrowRight } from '@icons/icons';
import Image from '@components/Image/Image';

interface IReviewsSection {
    reviews: PeopleReviewFragment[];
}

const ReviewsSection: React.FC<IReviewsSection> = ({ reviews }) => {
    const options: SwiperOptions = {
        speed: 600,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        slidesPerGroupAuto: true,
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
        loop: true,
        breakpoints: {
            640: {
                slidesPerGroup: 3,
            },
        },
        modules: [Pagination, Keyboard],
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
