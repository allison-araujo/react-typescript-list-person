import styled from "styled-components";
import { IButtonProps } from "./index";

export const Button = styled.button<IButtonProps>`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${props => (props.position ? props.position : "relative")};
  z-index: ${props => (props.zIndex ? props.zIndex : "0")};
  margin: ${props => (props.margin ? props.margin : "0px")};
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #1e90ff;

  transition: opacity 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
