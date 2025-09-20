import { useSelector } from "react-redux";
import EmptyCart from "../features/cart/EmptyCart";
import CartItem from "../features/cart/CartItem";
import { getCart, getTotalCartPrice } from "../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-6 md:px-12 lg:px-24">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-4xl font-bold text-gray-800">Your Cart</h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
        <p className="mt-2 text-gray-500">
          Review your selected products before checkout
        </p>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-gray-300 pt-6">
        <div className="flex w-full max-w-md items-center justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-green-500">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full max-w-md cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
