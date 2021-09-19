import React from 'react';
import Image from 'next/image';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { Partner } from '@graphql/graphql';
import {
    Container,
    Header,
    Slider,
    Slide,
    SlideText,
    SlideTextHeader,
} from './PartnersSection.styled';
import { ArrowRight, Link } from '@icons/icons';

interface IReviewsSection {
    partners?: Partner[];
}

Swiper.use([Pagination]);

const PartnersSection: React.FC<IReviewsSection> = ({ partners }) => {
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
        <Container id="partners">
            <Header>
                <h2>Нам доверяют</h2>
                <p>Клиники, которые пользуются нашими услугами</p>
                <ArrowRight />
            </Header>
            <Slider {...options}>
                {partners?.map(
                    (partner, index) =>
                        partner.partnerMain?.image?.sourceUrl && (
                            <SwiperSlide key={index}>
                                <Slide>
                                    <Image
                                        src={
                                            partner.partnerMain.image.sourceUrl
                                        }
                                        width={820}
                                        height={820}
                                    />
                                    <SlideText>
                                        <SlideTextHeader>
                                            <h3>{partner.title}</h3>
                                            {partner.partnerMain.link && (
                                                <a
                                                    href={
                                                        partner.partnerMain.link
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <Link />
                                                </a>
                                            )}
                                        </SlideTextHeader>
                                        {partner.partnerMain.description && (
                                            <span>
                                                {
                                                    partner.partnerMain
                                                        .description
                                                }
                                            </span>
                                        )}
                                        {partner.partnerMain.city && (
                                            <span>{`г. ${partner.partnerMain.city}`}</span>
                                        )}
                                    </SlideText>
                                </Slide>
                            </SwiperSlide>
                        )
                )}
            </Slider>
        </Container>
    );
};

export default PartnersSection;
