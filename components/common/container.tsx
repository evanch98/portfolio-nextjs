import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("max-w-[1200px] flex flex-col py-[256px]", className)}>
      {children}
    </div>
  );
};
