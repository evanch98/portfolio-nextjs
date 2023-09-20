import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "max-w-[1440px] flex flex-col py-[256px] px-[120px]",
        className
      )}
    >
      {children}
    </div>
  );
};
