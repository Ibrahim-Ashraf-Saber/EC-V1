import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div
      key={item.id}
      className="flex flex-row items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-md"
    >
      <img
        src={item.images[0]}
        alt={item.title}
        loading="lazy"
        className="h-24 w-24 rounded-md object-contain"
      />

      <div className="ml-6 flex flex-1 flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="font-medium text-gray-500">${item.price}</p>

        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-700 transition hover:bg-gray-300 hover:text-gray-900"
          >
            -
          </button>
          <span className="w-6 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-700 transition hover:bg-gray-300 hover:text-gray-900"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleRemoveFromCart}
        className="mt-2 flex cursor-pointer items-center justify-center rounded-full p-2 text-red-500 transition hover:bg-red-100 hover:text-red-700 md:mt-0 md:ml-4"
      >
        <HiOutlineTrash size={20} />
      </button>
    </div>
  );
}

export default CartItem;
