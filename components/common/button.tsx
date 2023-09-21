import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "hero" | "normal" | "normalWithIcon";
}

const variantMap = {
  hero: "border-[--primary-200] pl-[32px] pr-[24px] py-[16px] gap-x-[16px] hover:bg-[--primary-200] hover:text-[--primary-800] ease-in duration-300",
  normal:
    "border-[--black] px-[32px] py-[16px] hover:bg-[--black] hover:text-[--primary-100] ease-in duration-300",
  normalWithIcon:
    "border-[--black] pl-[32px] pr-[24px] py-[16px] gap-x-[16px] hover:bg-[--black] hover:text-[--primary-100] hover:gap-x-[24px] hover:pr-[16px] ease-in duration-300",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, type = "button", disabled, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "rounded-full button-text flex justify-center items-center border uppercase",
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
