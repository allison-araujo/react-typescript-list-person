import React from "react";
import { Container, MessageNotFound } from "./styles";

interface ITextProps {
  text: string;
}
const EmptyPage = ({ text }: ITextProps) => {
  return (
    <Container>
      <MessageNotFound>{text}</MessageNotFound>
    </Container>
  );
};

export default EmptyPage;
