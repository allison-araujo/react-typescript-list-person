import React from "react";
import Button from "../../Pages/Button";
import { Container, Input, InputSelect, MessageNotFound } from "./styles";

const options = [
  { value: "All", label: "All" },
  { value: "Nome", label: "nome" },
  { value: "Genero", label: "genero" },
  { value: "Idade", label: "Idade" },
  { value: "Nacionalidade", label: "Nacionalidade" },
];

const EmptyPage = () => {
  return (
    <>
      <Container>
        <Input type="text" placeholder="Search users.." />
        <Button type="submit" placeholder="Search">
          Search
        </Button>
      </Container>
      <InputSelect>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </InputSelect>
      <InputSelect>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </InputSelect>
      <MessageNotFound>Not User found!</MessageNotFound>
    </>
  );
};

export default EmptyPage;
