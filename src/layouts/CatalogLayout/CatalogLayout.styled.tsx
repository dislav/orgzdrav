import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Swiper } from 'swiper/react';

import Layout from '@components/Layout/Layout';
import PriceComponent from '@components/Price/Price';
import { Container as StyledSearchForm } from '@components/SearchForm/SearchForm.styled';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 40px 20px 80px;

    ${up('md')} {
        padding: 40px;
    }

    ${up('xl')} {
        padding: 100px 0;
    }

    ${StyledSearchForm} {
        margin-bottom: 26px;
    }
`;

export const Wrapper = styled.div`
    margin-bottom: 40px;

    ${up('md')} {
        display: flex;
        margin-bottom: 60px;
    }
`;

export const Slider = styled.div`
    margin-bottom: 40px;

    ${up('md')} {
        width: 48%;
        margin-bottom: 0;
    }

    .swiper {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const MainSlider = styled(Swiper)`
    margin-bottom: 10px;
`;

export const ThumbSlider = styled(Swiper)`
    .swiper-slide {
        opacity: 0.5;
        border: 2px solid transparent;
        transition: opacity 0.3s, border 0.3s;
        cursor: pointer;
    }

    .swiper-slide-thumb-active {
        opacity: 1;
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SliderImage = styled.div`
    position: relative;
    padding-top: 100%;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    ${up('md')} {
        width: 48%;
        margin-left: auto;
    }

    h1 {
        color: ${({ theme }) => theme.colors.black};
        font-size: 26px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 30px;
    }
`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 14px;

    span {
        color: ${({ theme }) => theme.colors.black};
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2;
        background: ${({ theme }) => theme.colors.gray15};
        border-radius: 4px;
        margin-right: 10px;
        margin-bottom: 4px;
        padding: 4px 8px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const Description = styled.div`
    margin-bottom: 20px;

    p {
        margin: 14px 0;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const Price = styled(PriceComponent)`
    color: ${({ theme }) => theme.colors.black};
`;

export const AccordionList = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    padding: 20px;
`;

export const AccordionTitle = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    padding-right: 14px;

    ${up('md')} {
        font-size: 18px;
        padding-right: 20px;
    }
`;
