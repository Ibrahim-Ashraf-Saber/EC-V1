import { HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import ProductImageSlider from "./ProductImageSlider";
import {
  addToWishlist,
  removeFromWishlist,
  isProductInWishlist,
} from "../wishlist/wishlistSlice";
import {
  addToCart,
  getCurrentQuantityById,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../cart/cartSlice";

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const inWishlist = useSelector((state) =>
    isProductInWishlist(state, product.id),
  );
  const currentQuantity = useSelector(getCurrentQuantityById(product.id));

  return (
    <div className="px-4 py-6 md:px-12 lg:px-24">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500"></div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-1/2 flex-1">
          <ProductImageSlider images={product.images} />
        </div>

        <div className="relative flex flex-1 flex-col gap-4">
          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4 text-2xl font-bold text-blue-600">
            ${product.price}
            {product.discount && (
              <span className="text-xl text-gray-400 line-through">
                ${product.price}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-4">
            {currentQuantity > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  className="rounded bg-gray-200 px-3 py-1 text-gray-700 transition hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-6 text-center font-medium">
                  {currentQuantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(product.id))}
                  className="rounded bg-gray-200 px-3 py-1 text-gray-700 transition hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            )}

            {inWishlist ? (
              <button
                onClick={() => dispatch(removeFromWishlist(product.id))}
                className="top-2 right-2 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-pink-100"
              >
                <HiOutlineHeart
                  size={22}
                  className="fill-pink-500 text-pink-500 transition-colors duration-200"
                />
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToWishlist(product))}
                className="top-2 right-2 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-pink-100"
              >
                <HiOutlineHeart
                  size={22}
                  className="text-gray-400 transition-colors duration-200 hover:text-pink-500"
                />
              </button>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              disabled={currentQuantity > 0}
              className={`w-full rounded-xl py-3 font-medium text-white shadow-md transition-all duration-200 ${
                currentQuantity > 0
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {currentQuantity > 0 ? "In Cart" : "Add to Cart"}
            </button>

            {currentQuantity > 0 && (
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="w-full rounded-xl bg-red-500 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-red-600"
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
