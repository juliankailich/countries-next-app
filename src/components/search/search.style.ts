import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 12px;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
`;

export const Select = styled.select`
  width: 150px;
  height: 100%;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0 12px;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  
  option {
    background-color: black;
    color: white;
  }
`;
