import { HiOutlineSearch } from "react-icons/hi";

function SearchBox() {
  return (
    <form className="flex items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all focus-within:ring-2 focus-within:ring-blue-400">
      <input
        type="text"
        placeholder="Search for product..."
        className="w-72 bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 transition-all outline-none focus:w-80 focus:placeholder-gray-300"
      />
      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center bg-blue-500 px-4 py-3 transition-all hover:bg-blue-600"
      >
        <HiOutlineSearch className="text-white" size={20} />
      </button>
    </form>
  );
}

export default SearchBox;
