import styled, { keyframes } from "styled-components";

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 1rem;
`;

const Animation = keyframes`
  0%,100%{
  transform:scale(0.5);
  background-color: #d7dbdd;
  }
  50%{
    transform:scale(1);  
    background-color: #d7dbdd;
  }


`;
export const Spiner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d7dbdd;
  display: inline-block;
  margin: 0.2rem;
  animation-name: ${Animation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;
