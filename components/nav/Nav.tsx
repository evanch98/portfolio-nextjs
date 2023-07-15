import Logo from "./Logo";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="w-full px-5 lg:px-10 shadow-xl flex justify-between items-center">
      <Logo />
      <ul className="hidden lg:flex justify-between space-x-10">
        <li>
          <NavLink href="/" name="Home" />
        </li>
        <li>
          <NavLink href="/projects" name="projects" />
        </li>
        <li>
          <NavLink href="/about" name="About" />
        </li>
        <li>
          <NavLink href="/blog" name="Blog" />
        </li>
      </ul>
      <button className="hidden lg:flex btn btn-primary">Contact Me</button>
    </nav>
  );
};

export default Nav;
