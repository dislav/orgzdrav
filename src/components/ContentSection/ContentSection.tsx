import React from 'react';
import styled from 'styled-components';

export const ContentSection = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 1.4;
    margin: 40px 0;

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
        color: ${({ theme }) => theme.colors.orange};
        text-decoration: underline;
    }
`;

export default ContentSection;
