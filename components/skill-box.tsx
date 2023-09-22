import { cn } from "@/lib/utils";

interface SkillBoxProps {
  border?: "top" | "bottom" | "topAndBottom";
  name: string;
}

const borderMap = {
  top: "border-t border-t-[#c7c8c9]",
  bottom: "border-b border-b-[#c7c8c9]",
  topAndBottom: "border-t border-b border-t-[#c7c8c9] border-b-[#c7c8c9]",
};

export const SkillBox = ({ border = "top", name }: SkillBoxProps) => {
  return (
    <div
      className={cn(
        "flex flex-col py-[8px] px-[16px] w-full items-center justify-center",
        borderMap[border]
      )}
    >
      <p className="heading-6">{name}</p>
    </div>
  );
};
