import NavLink from "@/components/common/nav-link";
import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";

interface OverviewSectionProps {
  title: string;
  category: string;
  date: string;
  framework: string;
  gitHub: string;
  live: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  category,
  date,
  framework,
  gitHub,
  live,
}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg">
        <h2 className="md:text-lg lg:text-xl font-bold">{title}</h2>
        <p>{framework}</p>
        <p className="opacity-70 text-sm md:text-base">{category}</p>
        <p className="text-xs md:text-sm italic opacity-70">
          Start Date: {date}
        </p>
      </div>
      <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg">
        <h2 className="md:text-lg lg:text-xl font-bold">Links</h2>
        <div className="w-full flex gap-x-4">
          <Link
            href={gitHub}
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <NavLink label="Code" icon={FiGithub} />
          </Link>
          <Link
            href={live}
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <NavLink label="Live" icon={FiGlobe} />
          </Link>
        </div>
        <p className="text-xs md:text-sm opacity-70 italic">
          Code is for the source code
        </p>
        <p className="text-xs md:text-sm opacity-70 italic">
          Live is for the live demo website
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;
