import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // payload = newItem
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      // payload = itemId
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      // payload = itemId
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * Number(item.price);
      }
    },
    decreaseQuantity(state, action) {
      // payload = itemId
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * Number(item.price);

        if (item.quantity === 0)
          cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cartItems;

export const getTotalCartQuantity = (state) =>
  state.cart?.cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart?.cartItems?.find((item) => item.id === id)?.quantity ?? 0;
