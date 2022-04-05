import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const ContentSection = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    line-height: 1.4;
    margin: 40px 0;

    h2 {
        font-size: 28px;
        font-weight: 700;
        margin: 40px 0;
    }

    p {
        margin: 20px 0;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
    }

    .has-text-align-center {
        text-align: center;
    }

    .wp-block-media-text {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        ${up('md')} {
            display: grid;
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;

            ${up('md')} {
                padding: 40px;
            }

            h1 {
                font-size: 32px;
                line-height: 1.2;
                margin-bottom: 20px;
            }
        }
    }

    figure {
        position: relative;
        height: 40vh;
        margin: 0 0 40px;

        ${up('md')} {
            height: auto;
            margin: 0;
            padding: 40px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .wp-block-buttons {
        display: flex;
        flex-direction: column;

        ${up('md')} {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    .wp-block-button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 12px;

        &__link {
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors.primary};
            border-radius: 4px;
            text-decoration: none;
            padding: 10px 16px;
        }

        &:last-child {
            margin-bottom: 0;
            margin-right: 0;
        }

        ${up('md')} {
            margin-bottom: 0;
            margin-right: 20px;
        }
    }
`;

export default ContentSection;
