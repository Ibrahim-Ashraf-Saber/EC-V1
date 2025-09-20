import Logo from "./Logo";
import NavIcons from "./NavIcons";
import SearchBox from "../features/search/SearchBox";

function Navbar() {
  return (
    <nav className="fixed z-40 flex w-full items-center justify-between border-b border-gray-100 bg-white px-20 py-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <Logo />
      <SearchBox />
      <NavIcons />
    </nav>
  );
}

export default Navbar;
