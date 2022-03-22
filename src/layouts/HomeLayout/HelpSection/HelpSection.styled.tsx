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
        margin-bottom: 30px;

        ${down('sm')} {
            font-size: 20px;
        }
    }

    ol {
        padding-left: 20px;

        li {
            font-weight: 500;
            margin-bottom: 10px;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
`;
