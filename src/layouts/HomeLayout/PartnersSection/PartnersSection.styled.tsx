import styled from 'styled-components';
import { rgba } from 'polished';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 80px 0;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    > h2 {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    > svg {
        width: 80px;
        height: 60px;
    }
`;

export const Slider = styled(Swiper)`
    max-width: 100vw;
    padding-bottom: 40px;

    .swiper-slide {
        max-width: 360px;
        width: 100%;
        will-change: scale;
        transform: scale(0.9);
        opacity: 0.5;
        transition: transform 0.6s, opacity 0.6s;

        &-active {
            opacity: 1;
            transform: scale(1);
        }
    }

    .swiper-pagination {
        position: absolute;
        left: 50%;
        bottom: 0;
        display: flex;
        align-items: center;
        transform: translateX(-50%);

        &-bullet {
            display: flex;
            width: 10px;
            height: 10px;
            background-color: ${({ theme }) =>
                rgba(theme.colors.telegram, 0.2)};
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
            transition: background-color 0.3s;

            &-active {
                background-color: ${({ theme }) => theme.colors.telegram};
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    overflow: hidden;
`;

export const SlideText = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.gray10};
    text-align: center;
    padding: 16px 20px;

    > span {
        color: ${({ theme }) => rgba(theme.colors.black, 0.7)};
    }
`;

export const SlideTextHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > h3 {
        font-size: 18px;
        font-weight: 500;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.gray05};
        border-radius: 4px;
        margin-left: 10px;

        > svg {
            width: 60%;
            height: 60%;
        }
    }
`;
