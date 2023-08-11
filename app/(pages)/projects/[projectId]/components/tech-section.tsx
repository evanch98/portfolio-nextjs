interface TechSectionProps {
  techs: string[];
}

const TechSection: React.FC<TechSectionProps> = ({ techs }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-5">
      <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg">
        <ul className="list-inside list-disc">
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechSection;
