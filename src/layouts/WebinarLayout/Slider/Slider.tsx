import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { SwiperSlide, SwiperProps } from 'swiper/react';

import { Container, Swiper } from './Slider.styled';
import { SimpleProductFragment } from '@graphql';
import WebinarPreview from '@layouts/WebinarLayout/WebinarPreview/WebinarPreview';

interface ISlider {
    className?: string;
    slides: SimpleProductFragment[];
}

SwiperCore.use([Autoplay]);

const Slider: React.FC<ISlider> = ({ className, slides }) => {
    const sliderOptions: SwiperProps = {
        slidesPerView: 3,
        grabCursor: true,
        autoplay: {
            delay: 8000,
        },
        autoHeight: true,
        spaceBetween: 40
    };

    return (
        <Container className={className}>
            <Swiper {...sliderOptions}>
                {slides.map((webinar, index) => (
                    <SwiperSlide key={index}>
                        <WebinarPreview webinar={webinar} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Slider;
