import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../features/cart/EmptyCart";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return <div>{cartItems.length === 0 ? <EmptyCart /> : <p>Cart</p>}</div>;
}

export default Cart;
