import styled from "styled-components";

export const StyledTable = styled.div`
  width: 50vw;
  border-radius: 10px;
  padding-left: 50px;

  @media (max-width: 768px) {
    width: 80vw;
    padding-left: 0px;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-height: 200px;
`;
