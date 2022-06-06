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
  background-color: #8A8E90;
  }
  50%{
    transform:scale(1);  
    background-color: #8A8E90;
  }


`;
export const Spiner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d7dbdd;
  display: inline-block;
  animation-name: ${Animation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
