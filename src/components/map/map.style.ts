import styled from "styled-components";
import Map from "react-map-gl";

export const MapBoxContainer = styled.div`
  padding: 10px;
  max-height: 80% @media (max-width: 768px) {
    width: 80vw;
    height: 80vh;
    overflow: visible;
  }
`;

export const StyledMap = styled(Map)`
  width: 50vw;
  height: 80%;
  overflow: hidden;
  display: flex;
`;
