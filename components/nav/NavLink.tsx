"use client"

interface NavLinkProps {
  href: string;
  name: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, name, isActive }) => {
  return (
    <a href={href}>
      <p>{name}</p>
    </a>
  );
};

export default NavLink;
