import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      // payload = newItem
      state.wishlistItems.push(action.payload);
    },
    removeFromWishlist(state, action) {
      // payload = itemId
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

// Selectors
export const getWishlist = (state) => state.wishlist.wishlistItems;

export const getTotalWishlistQuantity = (state) =>
  state.wishlist.wishlistItems.length;

export const isProductInWishlist = (state, id) =>
  !!state.wishlist.wishlistItems.find((item) => item.id === id);
