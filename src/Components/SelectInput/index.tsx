import React from "react";
import { Container, InputSelect } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput = ({
  options,
  onChange,
  defaultValue,
}: ISelectInputProps) => (
  <Container>
    <InputSelect onChange={onChange} defaultValue={defaultValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </InputSelect>
  </Container>
);

export default SelectInput;
