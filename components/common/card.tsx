import { FiGithub, FiGlobe, FiInfo } from "react-icons/fi";
import NavLink from "./nav-link";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  code?: string;
  live?: string;
  info?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  code,
  live,
  info,
}) => {
  return (
    <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg">
      <h3 className="md:text-lg lg:text-xl font-bold">{title}</h3>
      <p className="opacity-70 text-sm md:text-base">{description}</p>
      <div className="flex gap-x-4 w-full items-center justify-center mt-auto">
        {code && (
          <Link
            href={code}
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <NavLink label="Code" icon={FiGithub} />
          </Link>
        )}
        {live && (
          <Link
            href={live}
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <NavLink label="Live" icon={FiGlobe} />
          </Link>
        )}
        {info && (
          <Link
            href={info}
            className="hover:opacity-70 transition-opacity"
            target="_blank"
          >
            <NavLink label="Info" icon={FiInfo} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
