"use client";

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string;
  onclick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onclick, children }) => {
  return (
    <div
      onClick={onclick}
      className={twMerge("w-[14px] h-[14px] rounded-full", className)}
    >
      {children}
    </div>
  );
};

export default Button;
