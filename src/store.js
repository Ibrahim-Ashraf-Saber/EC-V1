import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { loadState, saveState } from "./utils/helpers";

const persistedCart = loadState("cart");
const persistedWishlist = loadState("wishlist");

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: {
    cart: persistedCart || undefined,
    wishlist: persistedWishlist || undefined,
  },
});

store.subscribe(() => {
  saveState("cart", store.getState().cart);
  saveState("wishlist", store.getState().wishlist);
});

export default store;
