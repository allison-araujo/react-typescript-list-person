import React from "react";
import { Container, MessageNotFound } from "./styles";
const EmptyPage = () => {
  return (
    <Container>
      <MessageNotFound>Not User found!</MessageNotFound>
    </Container>
  );
};

export default EmptyPage;
