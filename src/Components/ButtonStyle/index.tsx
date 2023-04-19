import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  margin?: string;
};

const ButtonStyle = ({ children, ...props }: IButtonProps) => (
  <Button {...props}>{children}</Button>
);

export default ButtonStyle;
