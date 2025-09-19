import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-fit rotate-6 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-600 p-2 shadow-md">
        <MdOutlineShoppingCart color="white" size={22} className="-rotate-6" />
      </div>

      <div className="flex flex-col -space-y-2">
        <p className="text-2xl font-extrabold tracking-tight text-gray-800">
          EC
        </p>
        <p className="text-sm font-medium tracking-wide text-gray-600">
          <span className="font-semibold text-blue-500">Online</span> Store
        </p>
      </div>
    </Link>
  );
}

export default Logo;
