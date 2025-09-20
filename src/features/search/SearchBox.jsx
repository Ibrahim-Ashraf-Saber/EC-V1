import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { suggestProducts } from "../products/productsSlice";
import { HiOutlineSearch } from "react-icons/hi";
import SearchSuggestions from "./SearchSuggestions";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { searchSuggestions, searchStatus } = useSelector(
    (state) => state.products,
  );
  const isLoading = searchStatus === "loading";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim().length) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowSuggestions(false);
  }, [location]);

  useEffect(() => {
    dispatch(suggestProducts(query.trim()));
  }, [query, dispatch]);

  return (
    <form
      ref={wrapperRef}
      onSubmit={handleSubmit}
      className="relative flex w-full items-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all focus-within:ring-2 focus-within:ring-blue-400 md:w-auto dark:bg-gray-800 dark:ring-gray-700 dark:focus-within:ring-blue-500"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for product..."
        className="w-full bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 transition-all outline-none focus:placeholder-gray-300 md:w-72 md:focus:w-80 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:placeholder-gray-400"
      />
      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center rounded-r-full bg-blue-500 px-4 py-3 transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <HiOutlineSearch className="text-white" size={20} />
      </button>

      {showSuggestions && !isLoading && searchSuggestions?.length > 0 && (
        <SearchSuggestions searchSuggestions={searchSuggestions} />
      )}
    </form>
  );
}

export default SearchBox;
