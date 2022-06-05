import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  margin: 40px;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  grid-gap: 75px;
`;

export const ImageBoxRow = styled.img`
  width: 100px;
  align-items: center;
  height: 100px;
  border-radius: 100px;
  justify-content: center;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 15px;
  height: 30px;
  text-decoration: none;
  color: #000;
  align-items: center;
`;

export const Grid = styled.div`
  grid-gap: 10px;
  justify-content: center;
`;
