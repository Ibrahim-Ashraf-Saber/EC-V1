import { useSelector } from "react-redux";
import EmptyWishlist from "../features/wishlist/EmptyWishlist";
import ProductItem from "../features/products/ProductItem";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <div>
      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div>
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-800">
              Your Wishlist
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
            <p className="mt-2 text-gray-500">
              Keep track of what you love and purchase with ease
            </p>
          </div>

          <div className="my-5 flex flex-wrap items-center justify-center gap-7 drop-shadow-xl">
            {wishlistItems.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
