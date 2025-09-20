import Logo from "./Logo";
import NavIcons from "./NavIcons";
import SearchBox from "../features/search/SearchBox";

function Navbar() {
  return (
    <nav className="fixed z-30 flex w-full items-center justify-between gap-5 border-b border-gray-100 bg-white px-5 py-5 shadow-sm md:px-20 dark:border-gray-700 dark:bg-gray-900">
      <Logo />
      <SearchBox />
      <NavIcons />
    </nav>
  );
}

export default Navbar;
