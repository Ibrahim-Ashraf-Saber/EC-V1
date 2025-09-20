import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalWishlistQuantity } from "../features/wishlist/wishlistSlice";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiSun,
  HiMoon,
} from "react-icons/hi";

function NavIcons() {
  const { darkMode, setDarkMode } = useDarkMode();
  const cartQuantity = useSelector(getTotalCartQuantity);
  const wishQuantity = useSelector(getTotalWishlistQuantity);

  return (
    <div className="flex items-center gap-6">
      {/* Cart */}
      <Link
        to="/cart"
        className="group relative cursor-pointer rounded-full p-2 transition-all hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900"
      >
        <HiOutlineShoppingCart
          size={26}
          className="text-gray-700 transition-all group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400"
        />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-md">
          {cartQuantity}
        </span>
      </Link>

      <Link
        to="/wishlist"
        className="group relative cursor-pointer rounded-full p-2 transition-all hover:scale-105 hover:bg-pink-100 dark:hover:bg-pink-900"
      >
        <HiOutlineHeart
          size={26}
          className="text-gray-700 transition-all group-hover:text-pink-600 dark:text-gray-300 dark:group-hover:text-pink-400"
        />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white shadow-md">
          {wishQuantity}
        </span>
      </Link>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        {darkMode ? (
          <HiSun size={20} className="text-yellow-400 transition-all" />
        ) : (
          <HiMoon
            size={20}
            className="text-gray-800 transition-all dark:text-gray-200"
          />
        )}
      </button>
    </div>
  );
}

export default NavIcons;
