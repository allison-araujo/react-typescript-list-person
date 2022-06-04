import React from "react";
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  ToogleLabel,
} from "./styles";

interface IToogleProps {
  label: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToogleSelector = ({ checked, handleChange, label }: IToogleProps) => {
  return (
    <Container>
      <ToogleLabel>{label}</ToogleLabel>
      <CheckBoxWrapper>
        <CheckBox type="checkbox" checked={checked} onChange={handleChange} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </Container>
  );
};

export default ToogleSelector;
