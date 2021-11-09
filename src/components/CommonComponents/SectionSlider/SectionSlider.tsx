import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import { CommonComponentsProps } from '@graphql/types';
import { Container, Slide } from './SectionSlider.styled';

const SectionSlider: React.FC<CommonComponentsProps> = ({ gallery }) => {
    return (
        <Container speed={600} loop>
            {gallery?.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Slide>
                        <Image
                            src={slide.sourceUrl}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </Slide>
                </SwiperSlide>
            ))}
        </Container>
    );
};

export default SectionSlider;
