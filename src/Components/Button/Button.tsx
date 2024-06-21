import { MouseEventHandler, ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  className,
  type,
  onClick,
}: IButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
