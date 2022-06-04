import React from "react";
import { CheckboxInput, CheckLabel, Container } from "./styles";

interface ICheckboxButton {
  label: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButton = ({ checked, handleChange, label }: ICheckboxButton) => {
  return (
    <Container>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <CheckLabel>{label}</CheckLabel>
    </Container>
  );
};

export default CheckboxButton;
