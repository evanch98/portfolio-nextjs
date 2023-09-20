interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="w-[790px] flex flex-col items-center justify-center text-center gap-y-[24px]">
      <h1 className="heading-1 text-[--black] uppercase">{title}</h1>
      <p className="paragraph text-[--black] opacity-75">{description}</p>
    </div>
  );
};
