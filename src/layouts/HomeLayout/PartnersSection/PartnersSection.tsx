import React from 'react';
import { SwiperOptions, Pagination, Keyboard, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { PartnerFragment } from '@graphql';

import {
    Container,
    Header,
    Slider,
    Slide,
    SlideText,
    SlideTextHeader,
} from './PartnersSection.styled';
import Image from '@components/Image/Image';
import { ArrowRight, Link } from '@icons/icons';

interface IReviewsSection {
    partners: PartnerFragment[];
}

const PartnersSection: React.FC<IReviewsSection> = ({ partners }) => {
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
        autoplay: {
            delay: 3000,
        },
        loop: true,
        preventClicks: true,
        modules: [Pagination, Keyboard, Autoplay]
    };

    return (
        <Container>
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
