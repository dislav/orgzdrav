import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 20px;

  > h2 {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  > p {
    font-size: 18px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > button {
    flex: 1;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
