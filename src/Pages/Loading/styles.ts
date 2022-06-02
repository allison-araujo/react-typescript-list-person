import styled, { keyframes } from "styled-components";

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Animaiiton = keyframes`
  0%,100%{
  transform:scale(0.2);
    background-color: #d7dbdd;
  }
  50%{
    transform:scale(1);  
    background-color: #d7dbdd;
  }


`;
export const Spiner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d7dbdd;
  display: inline-block;
  margin: 0.5rem;
  animation-name: ${Animaiiton};
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
`;

export const Load = styled.div`
  border: 16px solid #dcdcdc;
  border-top: 16px solid rgb(136, 136, 136);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
`;
