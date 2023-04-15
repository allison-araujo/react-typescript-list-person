import { InputHTMLAttributes } from "react";

type IInputProsps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: IInputProsps) => {
  return <Input {...props} />;
};
