import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getTotalCartPrice,
  clearCart,
} from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";
import EmptyCart from "../features/cart/EmptyCart";
import Swal from "sweetalert2";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);

  function hanldeClearCart() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire({
          title: "Deleted!",
          text: "Your cart has been deleted.",
          icon: "success",
        });
      }
    });
  }

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="px-24 py-6">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-4xl font-bold text-gray-800 dark:text-gray-100">
          Your Cart
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Review your selected products before checkout
        </p>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 border-t border-gray-300 pt-6 dark:border-gray-700">
        <div className="flex w-full max-w-md items-center justify-between text-xl font-bold">
          <span className="text-gray-800 dark:text-gray-200">Total</span>
          <span className="text-green-500">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex w-2xl items-center gap-7">
          <button className="w-md cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700">
            Checkout
          </button>
          <button
            onClick={hanldeClearCart}
            className="w-md cursor-pointer rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-red-700"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
