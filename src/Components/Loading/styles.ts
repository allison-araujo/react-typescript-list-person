import styled, { keyframes } from "styled-components";

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Animaiiton = keyframes`
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
  animation-name: ${Animaiiton};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;

export const Load = styled.div`
  border: 16px solid #dcdcdc;
  border-top: 16px solid rgb(136, 136, 136);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
`;
