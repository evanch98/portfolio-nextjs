import { cn } from "@/lib/utils";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ children, className }) => {
  return (
    <div
      className={cn("w-full bg-[#FCA5A5] rounded-2xl p-5 shadow-lg", className)}
    >
      {children}
    </div>
  );
};

export default Alert;
