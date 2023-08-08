import { FiGithub, FiGlobe, FiInfo } from "react-icons/fi";
import NavLink from "./nav-link";
import Link from "next/link";

const Card = () => {
  return (
    <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2">
      <h3 className="md:text-lg lg:text-xl font-bold">Airbnb Clone</h3>
      <p className="opacity-70 text-sm md:text-base">
        An airbnb clone website built with Next JS, TypeScript, Tailwind CSS,
        Prisma, MongoDB, and Zustand.
      </p>
      <div className="flex gap-x-4 w-full items-center justify-center">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <NavLink label="Code" icon={FiGithub} />
        </Link>
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <NavLink label="Live" icon={FiGlobe} />
        </Link>
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <NavLink label="Info" icon={FiInfo} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
