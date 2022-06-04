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
      <CheckBoxWrapper>
        <CheckBox type="checkbox" checked={checked} onChange={handleChange} />
        <ToogleLabel>{label}</ToogleLabel>
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </Container>
  );
};

export default ToogleSelector;
