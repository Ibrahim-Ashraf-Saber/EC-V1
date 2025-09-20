import { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { suggestProducts } from "../products/productsSlice";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);
  const { suggestionsProducts, searchStatus } = useSelector(
    (state) => state.products,
  );
  const isLoading = searchStatus === "loading";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim().length) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);
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
    dispatch(suggestProducts(query));
  }, [query, dispatch]);

  return (
    <form
      ref={wrapperRef}
      onSubmit={handleSubmit}
      className="relative flex items-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all focus-within:ring-2 focus-within:ring-blue-400"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for product..."
        className="w-72 bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 transition-all outline-none focus:w-80 focus:placeholder-gray-300"
      />
      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center rounded-r-full bg-blue-500 px-4 py-3 transition-all hover:bg-blue-600"
      >
        <HiOutlineSearch className="text-white" size={20} />
      </button>
      {showSuggestions && !isLoading && suggestionsProducts.length > 0 && (
        <SearchSuggestions suggestionsProducts={suggestionsProducts} />
      )}
    </form>
  );
}

export default SearchBox;
