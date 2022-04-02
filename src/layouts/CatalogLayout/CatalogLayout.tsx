import React, { useState } from 'react';
import Swiper, { Thumbs, FreeMode, Navigation } from 'swiper';
import { SwiperSlide, SwiperProps } from 'swiper/react';

import {
    Container,
    Wrapper,
    Slider,
    MainSlider,
    ThumbSlider,
    SliderImage,
    Content,
    Description,
    Price,
    Categories,
} from './CatalogLayout.styled';

import { ILayout } from '@components/Layout/Layout';

const CatalogLayout: React.FC<ILayout> = ({ children, product, ...props }) => {
    const [thumbSwiper, setThumbSwiper] = useState<Swiper | null>(null);

    const swiperOptions: SwiperProps = {
        modules: [FreeMode, Navigation, Thumbs],
        thumbs: {
            swiper: thumbSwiper,
        },
        navigation: true,
        loop: true,
    };

    const swiperThumbOptions: SwiperProps = {
        onSwiper: setThumbSwiper,
        slidesPerView: 6,
        spaceBetween: 8,
        modules: [FreeMode, Navigation, Thumbs],
        watchSlidesProgress: true,
        freeMode: true,
        loop:
            !!product?.galleryImages?.nodes &&
            product?.galleryImages?.nodes?.length > 6,
    };

    return (
        <Container {...props} product={product}>
            {product && (
                <Wrapper>
                    <Slider>
                        <MainSlider {...swiperOptions}>
                            {product.galleryImages?.nodes?.map(
                                (image, index) => (
                                    <SwiperSlide key={index}>
                                        <SliderImage>
                                            <img
                                                src={image?.sourceUrl || ''}
                                                alt={image?.altText || ''}
                                            />
                                        </SliderImage>
                                    </SwiperSlide>
                                )
                            )}
                        </MainSlider>
                        <ThumbSlider {...swiperThumbOptions}>
                            {product.galleryImages?.nodes?.map(
                                (image, index) => (
                                    <SwiperSlide key={index}>
                                        <SliderImage>
                                            <img
                                                src={image?.sourceUrl || ''}
                                                alt={image?.altText || ''}
                                            />
                                        </SliderImage>
                                    </SwiperSlide>
                                )
                            )}
                        </ThumbSlider>
                    </Slider>

                    <Content>
                        <Categories>
                            {product?.productCategories?.nodes &&
                                product.productCategories.nodes.length > 0 &&
                                product?.productCategories.nodes.map(
                                    (category) => (
                                        <span key={category?.slug}>
                                            {category?.name}
                                        </span>
                                    )
                                )}
                        </Categories>

                        {product?.name && <h1>{product.name}</h1>}

                        {product?.shortDescription && (
                            <Description
                                dangerouslySetInnerHTML={{
                                    __html: product.shortDescription,
                                }}
                            />
                        )}

                        {product?.regularPrice && (
                            <Price
                                regularPrice={product.regularPrice}
                                salePrice={product.salePrice}
                            />
                        )}
                    </Content>
                </Wrapper>
            )}

            {children}
        </Container>
    );
};

export default CatalogLayout;
