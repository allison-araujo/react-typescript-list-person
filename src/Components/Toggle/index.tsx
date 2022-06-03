import React from "react";
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  ToogleLabel,
} from "./styles";

interface IToogleProps {
  labelLeft: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ToogleSelector = ({ checked, onChange, labelLeft }: IToogleProps) => {
  return (
    <Container>
      <ToogleLabel>{labelLeft}</ToogleLabel>
      <CheckBoxWrapper>
        <CheckBox type="checkbox" checked={checked} onChange={onChange} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </Container>
  );
};

export default ToogleSelector;
