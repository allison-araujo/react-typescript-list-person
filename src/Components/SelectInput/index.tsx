import { ReactNode, SelectHTMLAttributes } from "react";
import { InputSelect } from "./styles";

export type ISelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

const SelectInput = ({ children, ...props }: ISelectInputProps) => (
  <InputSelect {...props}>{children}</InputSelect>
);

export default SelectInput;
