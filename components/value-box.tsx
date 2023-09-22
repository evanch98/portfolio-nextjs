interface ValueBoxProps {
  title: string;
  description: string;
}

export const ValueBox = ({ title, description }: ValueBoxProps) => {
  return (
    <div className="w-[380px] flex flex-col gap-y-[24px]">
      <h2 className="heading-3">{title}</h2>
      <p className="opacity-75 paragraph">{description}</p>
    </div>
  );
};
