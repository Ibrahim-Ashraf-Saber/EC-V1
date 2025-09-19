import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { id, title, description, price, rating, images, discountPercentage } =
    product;

  return (
    <Link
      to={`/products/${id}`}
      className="group block max-w-xs rounded-2xl bg-white p-4"
    >
      <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-2">
        <img
          src={images[0]}
          alt={title}
          className="h-48 w-full rounded-xl object-contain transition-all group-hover:scale-110"
        />

        <button className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-2 shadow-md transition hover:bg-pink-100 hover:text-pink-500">
          <HiOutlineHeart size={22} className="text-gray-600" />
        </button>

        {Math.floor(discountPercentage) >= 10 && (
          <span className="absolute bottom-2 left-2 rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
            -{Math.floor(discountPercentage)}%
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
            ⭐ {rating.toFixed(1)}
          </span>
          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="mt-4 w-full cursor-pointer rounded-xl bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Add to cart
      </button>
    </Link>
  );
}

export default ProductItem;
