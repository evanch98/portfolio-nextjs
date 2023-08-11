interface OverviewSectionProps {
  title: string;
  category: string;
  date: string;
  gitHub: string;
  live: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  category,
  date,
  gitHub,
  live,
}) => {
  return (
    <div className="w-full grid grid-cols-1 gap-5">
      <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg">
        <h2 className="">{title}</h2>
      </div>
    </div>
  );
};

export default OverviewSection;
