"use client";

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string;
  onclick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
  return <div className={twMerge("w-3 h-3 rounded-full", className)}></div>;
};

export default Button;
