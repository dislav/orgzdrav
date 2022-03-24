import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.gray15};
    padding: 160px 0;

    ${down('sm')} {
        padding: 40px 20px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;

    h2 {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;

        ${down('sm')} {
            font-size: 18px;
        }
    }

    ol {
        list-style: none;
        padding-left: 20px;

        li {
            position: relative;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 40px;
            padding-left: 10px;
            z-index: 1;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
`;

export const Value = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 56px;
    font-weight: 700;
    transform: translateY(-40%);
    z-index: -1;
`;
