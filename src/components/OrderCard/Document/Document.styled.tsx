import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90px;
  background-color: ${({ theme }) => theme.colors.gray05};
  border: 1px solid ${({ theme }) => theme.colors.gray15};
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  line-height: 1.2;
  margin: auto;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const Date = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 8px;
`;

export const Format = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px 0 0 0;
  padding: 4px 6px;
  margin-left: auto;
`;

export const VideoModal = styled.div`
  min-width: 800px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
`;