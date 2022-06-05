import styled from "styled-components";

export const Container = styled.button`
  margin: 7px 0;
  width: auto;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #1e90ff;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
