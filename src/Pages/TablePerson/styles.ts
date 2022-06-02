import styled from "styled-components";

{
  /*
table styles
*/
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const ImageBox = styled.img`
  height: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50px;
`;

export const ImageBoxRow = styled.img`
  width: 150px;
  align-items: center;
  height: 150px;
  border-radius: 100px;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 25px;
  align-items: center;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  flex-direction: row;

  color: #000;

  &::before,
  &:after {
    content: "";
    display: flex;
  }
  &:after {
    clear: both;
  }
`;

export const Column = styled.div`
  float: left;
  padding: 3rem;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  background-color: #a4d4;

  flex-direction: row;
`;
