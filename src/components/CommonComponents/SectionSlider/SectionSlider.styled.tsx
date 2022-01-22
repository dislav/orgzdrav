import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    margin-bottom: 20px;
    margin-left: auto;
    padding: 6px 16px;

    span {
        font-weight: 700;
        margin-left: 6px;

        &:before {
            content: '/';
            margin-right: 6px;
        }
    }
`;

export const SliderWrapper = styled.div`
    position: relative;

    ${up('xl')} {
        width: calc(100% + 80px);
        margin-left: -40px;
    }
`;

export const Slide = styled.div`
    position: relative;
    padding-top: 50%;
`;

export const SlideButton = styled.div<{ isNextButton?: boolean }>`
    position: absolute;
    top: 50%;
    right: ${({ isNextButton }) => (isNextButton ? 0 : null)};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(
        ${({ isNextButton }) => (isNextButton ? '50%, -50%' : '-50%, -50%')}
    );
    cursor: pointer;
    z-index: 2;

    svg {
        width: 40%;
        height: 40%;
        transform: translateX(
                ${({ isNextButton }) => (isNextButton ? '2px' : '-2px')}
            )
            rotate(${({ isNextButton }) => (isNextButton ? '-90deg' : '90deg')});
    }
`;
