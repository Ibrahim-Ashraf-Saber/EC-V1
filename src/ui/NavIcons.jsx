import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getTotalWishlistQuantity } from "../features/wishlist/wishlistSlice";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi";

function NavIcons() {
  const cartQuantity = useSelector(getTotalCartQuantity);
  const wishQuantity = useSelector(getTotalWishlistQuantity);

  return (
    <div className="flex items-center gap-6">
      <Link
        to="/cart"
        className="group relative cursor-pointer rounded-full p-2 transition-all duration-200 hover:scale-110 hover:bg-blue-50"
      >
        <HiOutlineShoppingCart
          size={26}
          className="text-gray-600 group-hover:text-blue-600"
        />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-md">
          {cartQuantity}
        </span>
      </Link>

      <Link
        to="/wishlist"
        className="group relative cursor-pointer rounded-full p-2 transition-all duration-200 hover:scale-110 hover:bg-pink-50"
      >
        <HiOutlineHeart
          size={26}
          className="text-gray-600 group-hover:text-pink-600"
        />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white shadow-md">
          {wishQuantity}
        </span>
      </Link>
    </div>
  );
}

export default NavIcons;
