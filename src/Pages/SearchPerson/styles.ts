import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 50px;
  justify-content: center;
`;

export const InputSelectName = styled.select`
  width: 70%;
  display: flex;
  justify-content: start;
  border-radius: 8px;
  height: 50px;
  padding: 50px;
  font-size: 10px;
  border: none;
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
  display: flex;
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

export const GroupSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
