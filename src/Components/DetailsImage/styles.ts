import styled from "styled-components";
import { TypeDetailsImageProps } from ".";

export const ProfileDetailsImage = styled.image<TypeDetailsImageProps>`
  border-radius: 50%;
  width: ${props => (props.width ? props.width : "70px")};
  position: ${props => (props.position ? props.position : "relative")};
`;
