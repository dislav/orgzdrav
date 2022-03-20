import styled from 'styled-components';
import { rgba } from 'polished';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.gray15};
    overflow: hidden;
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
    }

    > svg {
        width: 80px;
        height: 60px;
    }
`;

export const Slider = styled(Swiper)`
    padding-bottom: 40px;
    overflow: visible;

    .swiper-slide {
        max-width: 360px;
        will-change: scale;
        transform: scale(1);
        transition: transform 0.6s, opacity 0.6s, box-shadow 0.3s;
        box-shadow: none;
        margin: 0 10px;

        img {
            border-radius: 4px;
        }

        &:hover {
            transform: scale(1.2);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
            z-index: 10;
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
