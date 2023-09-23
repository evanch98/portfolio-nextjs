import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "hero" | "normal" | "normalWithIcon";
}

const variantMap = {
  hero: "border-[--primary-200] pl-[32px] pr-[24px] py-[16px] gap-x-[16px] hover:bg-[--primary-200] hover:text-[--primary-800] ease-in duration-300",
  normal:
    "border-[--black] px-[32px] py-[16px] enabled:hover:bg-[--black] enabled:hover:text-[--primary-100] ease-in duration-300 disabled:border-[#c7c8c9] disabled:text-[#c7c8c9]",
  normalWithIcon:
    "border-[--black] pl-[32px] pr-[24px] py-[16px] gap-x-[16px] enabled:hover:bg-[--black] enabled:hover:text-[--primary-100] enabled:hover:gap-x-[24px] enabled:hover:pr-[16px] ease-in duration-300 disabled:border-[#c7c8c9] disabled:text-[#c7c8c9]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, type = "button", disabled, ...props },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        className={cn(
          "rounded-full button-text flex justify-center items-center border uppercase disabled:cursor-not-allowed",
          variantMap[variant],
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
