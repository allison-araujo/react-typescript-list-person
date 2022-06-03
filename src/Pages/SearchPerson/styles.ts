import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: center;
`;
export const Input = styled.input`
  grid-column: 1/4;
  font-size: 16px;
  padding: 15px;
  text-align: left;
  margin: 10px;
  width: 90%;
  border: none;
  background-color: #d7dbdd;
  border-radius: 8px;
`;

export const InputSelectName = styled.select`
  justify-content: start;
  width: 50%;
  border-radius: 8px;
  height: 50px;
  padding: 10px;
  font-size: 10px;
  border: none;
`;

export const InputSelect = styled.select`
  justify-content: space-between;
  width: 50%;
  border-radius: 8px;
  padding: 15px;
  height: 50px;
  font-size: 10px;
  border: none;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  text-align: center;
  color: white;
  border: 0.2rem solid white;
  width: 100%;
`;

export const Space = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Checkbox = styled.input`
  background-color: #000;
  width: 100%;
  display: none;
`;
export const Toogle = styled.div`
  position: absolute;
  width: 75px;
  display: inline-block;
  top: 8px;
`;

export const Switch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;
