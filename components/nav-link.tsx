"use client";

import { IconType } from "react-icons";

interface NavLinkProps {
  label: string;
  icon: IconType;
}

const NavLink: React.FC<NavLinkProps> = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 text-xs">
      <Icon className="w-5 h-5" />
      {label}
    </div>
  );
};

export default NavLink;
