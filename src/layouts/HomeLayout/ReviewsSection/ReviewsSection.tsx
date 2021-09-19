import React from 'react';
import Image from 'next/image';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { Review } from '@graphql/graphql';
import { Container, Header, Slider } from './ReviewsSection.styled';
import { ArrowRight } from '@icons/icons';

interface IReviewsSection {
    reviews?: Review[];
}

Swiper.use([Pagination]);

const ReviewsSection: React.FC<IReviewsSection> = ({ reviews }) => {
    const options: SwiperOptions = {
        speed: 600,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            clickable: true,
        },
        grabCursor: true,
    };

    return (
        <Container id="reviews">
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
