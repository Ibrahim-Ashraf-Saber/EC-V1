import { HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
  isProductInWishlist,
} from "../wishlist/wishlistSlice";
import { addToCart, getCurrentQuantityById } from "../cart/cartSlice";

function ProductItem({ product }) {
  const { id, title, description, price, rating, images, discountPercentage } =
    product;

  const dispatch = useDispatch();
  const inWishlist = useSelector((state) =>
    isProductInWishlist(state, product.id),
  );
  const currentQuantity = useSelector(getCurrentQuantityById(product.id));

  function handleAddToWishlist(e) {
    e.preventDefault();
    dispatch(addToWishlist(product));
  }

  function handleRemoveFromWishlist(e) {
    e.preventDefault();
    dispatch(removeFromWishlist(product.id));
  }

  function handleAddToCart(e) {
    e.preventDefault();

    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: 1 * Number(product.price),
    };
    dispatch(addToCart(newProduct));
  }

  return (
    <Link
      to={`/products/${id}`}
      className="group block max-w-xs rounded-2xl bg-white p-4"
    >
      <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-2">
        <img
          src={images?.[0]}
          alt={title}
          loading="lazy"
          className="h-48 w-full rounded-xl object-contain transition-all group-hover:scale-110"
        />

        {inWishlist ? (
          <button
            onClick={handleRemoveFromWishlist}
            className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-pink-100"
          >
            <HiOutlineHeart
              size={22}
              className="fill-pink-500 text-pink-500 transition-colors duration-200"
            />
          </button>
        ) : (
          <button
            onClick={handleAddToWishlist}
            className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-pink-100"
          >
            <HiOutlineHeart
              size={22}
              className="text-gray-400 transition-colors duration-200 hover:text-pink-500"
            />
          </button>
        )}

        {Math.floor(discountPercentage) >= 10 && (
          <span className="absolute bottom-2 left-2 rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
            -{Math.floor(Number(discountPercentage))}%
          </span>
        )}
      </div>

      <div className="mt-3 space-y-2">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-yellow-600">
            ⭐ {Number(rating).toFixed(1)}
          </span>
          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={currentQuantity > 0}
        className={`mt-4 w-full rounded-xl py-2 font-medium text-white shadow-md transition-all duration-200 ${
          currentQuantity > 0
            ? "cursor-not-allowed bg-gray-400"
            : "cursor-pointer bg-blue-600 hover:bg-blue-700"
        } `}
      >
        {currentQuantity > 0 ? "In Cart" : "Add to Cart"}
      </button>
    </Link>
  );
}

export default ProductItem;
