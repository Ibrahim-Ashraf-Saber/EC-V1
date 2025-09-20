import Logo from "./Logo";
import NavIcons from "./NavIcons";
import SearchBox from "../features/search/SearchBox";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <nav className="fixed z-30 flex w-full items-center justify-between gap-5 border-b border-gray-100 bg-white px-5 py-5 shadow-sm md:px-20 dark:border-gray-700 dark:bg-gray-900">
      <Logo />
      <div className="hidden md:block">
        <SearchBox />
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setShow((s) => !s)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-blue-500 px-4 py-3 transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <HiOutlineSearch className="text-white" size={20} />
        </button>
        {show && (
          <div className="absolute top-full left-0 flex w-full items-center justify-center border-y border-gray-200 bg-white py-5">
            <SearchBox />
          </div>
        )}
      </div>
      <NavIcons />
    </nav>
  );
}

export default Navbar;
