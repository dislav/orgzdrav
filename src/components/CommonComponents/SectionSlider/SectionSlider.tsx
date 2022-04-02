import React, { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Post_Postmain_Content_SectionSlider } from '@graphql';

import {
    Container,
    Counter,
    SliderWrapper,
    Slide,
    SlideButton,
} from './SectionSlider.styled';
import Image from '@components/Image/Image';
import { ArrowsDown } from '@icons/icons';

const SectionSlider: React.FC<Post_Postmain_Content_SectionSlider> = ({
    gallery,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slider, setSlider] = useState<SwiperCore | null>(null);

    const formatCounter = (value: number | string) =>
        +value > 10 ? value.toString() : `0${value}`;

    return (
        <Container>
            <Counter>
                {formatCounter(currentIndex + 1)}
                <span>{formatCounter(gallery?.length || 1)}</span>
            </Counter>
            <SliderWrapper>
                <SlideButton onClick={() => slider?.slidePrev()}>
                    <ArrowsDown />
                </SlideButton>
                <SlideButton onClick={() => slider?.slideNext()} isNextButton>
                    <ArrowsDown />
                </SlideButton>

                <Swiper
                    onSwiper={setSlider}
                    onSlideChange={({ realIndex }) =>
                        setCurrentIndex(realIndex)
                    }
                    speed={600}
                    grabCursor
                    loop
                >
                    {gallery?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Slide>
                                <Image
                                    src={slide?.sourceUrl || ''}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Slide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SliderWrapper>
        </Container>
    );
};

export default SectionSlider;
