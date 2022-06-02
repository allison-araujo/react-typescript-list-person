import React from "react";
import { Container } from "./styles";
interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <Container>{children}</Container>;
};

export default Content;
