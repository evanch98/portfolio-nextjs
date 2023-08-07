"use client";

import { IconType } from "react-icons";

interface NavLinkProps {
  label: string;
  icon: IconType;
}

const NavLink: React.FC<NavLinkProps> = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {label}
      <Icon className="w-6 h-6" />
    </div>
  );
};

export default NavLink;
