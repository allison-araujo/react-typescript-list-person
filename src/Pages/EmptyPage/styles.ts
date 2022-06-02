import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  color: #fff;
`;

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  padding: 15px;
  text-align: left;
  margin: 10px;
  width: 30%;
  border: none;
  background-color: #d7dbdd;

  border-radius: 8px;
`;
export const MessageNotFound = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  color: #000;
`;

export const InputSelect = styled.select`
  display: flex;
  justify-content: center;
  width: 10%;
  border-radius: 8px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
  font-size: 10px;
  border: none;
`;

export const Col = styled.col`
  display: flex;
  width: 100%;
`;
