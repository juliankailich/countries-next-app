import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    overflow: hidden;
  }
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  color: white;
  padding-top: 24px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  gap: 40px;
  width: 100vw;
  max-width: 100vw;
  padding-bottom: 10px;
  height: 70%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SpinnerContainer = styled.div`
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: black;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
