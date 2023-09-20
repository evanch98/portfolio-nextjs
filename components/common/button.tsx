import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "hero" | "normal" | "normalWithIcon";
}

const variantMap = {
  hero: "border-[--primary-200] pl-[32px] pr-[24px] py-[16px] flex gap-x-[16px]",
  normal: "border-[--black] px-[32px] py-[16px]",
  normalWithIcon:
    "border-[--black] pl-[32px] pr-[24px] py-[16px] flex gap-x-[16px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, type = "button", disabled, ...props },
    ref
  ) => {
    return (
      <button className={cn("rounded-full button-text", variantMap[variant])}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
