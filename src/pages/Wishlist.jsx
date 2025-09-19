import React from "react";
import { useSelector } from "react-redux";
import EmptyWishlist from "../features/wishlist/EmptyWishlist";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <div>
      {wishlistItems.length === 0 ? <EmptyWishlist /> : <p>WishList</p>}
    </div>
  );
}

export default Wishlist;
