import styled from 'styled-components';
import { rgba } from 'polished';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
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
  
  .swiper-slide {
    max-width: 820px;
    will-change: scale;
    opacity: 0.5;
    transform: scale(0.9);
    transition: transform 0.6s, opacity 0.6s;
    
    &-active {
      opacity: 1;
      transform: scale(1);
    }
    
    img {
      border-radius: 4px;
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
      background-color: ${({ theme }) => rgba(theme.colors.telegram, 0.2)};
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