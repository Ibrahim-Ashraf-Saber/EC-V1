import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

export function toastAddToCart(product) {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } ring-opacity-5 pointer-events-auto flex w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-blue-200`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="line-clamp-1 text-sm font-medium text-gray-900">
                {product.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">Added to cart</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full cursor-pointer items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
    ),
    { duration: 2000 },
  );
}
