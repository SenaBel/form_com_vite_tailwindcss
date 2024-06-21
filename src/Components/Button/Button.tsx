import { ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, type }: IButtonProps) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
