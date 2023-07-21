"use client";

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
  return <div className={twMerge("w-3 h-3 rounded-ful", className)}></div>;
};

export default Button;
