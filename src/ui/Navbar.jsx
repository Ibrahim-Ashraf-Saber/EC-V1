import Logo from "./Logo";
import NavIcons from "./NavIcons";
import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between border-b border-gray-100 bg-white px-20 py-5 shadow-sm">
      <Logo />
      <SearchBox />
      <NavIcons />
    </nav>
  );
}

export default Navbar;
