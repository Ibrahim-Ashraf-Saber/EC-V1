import { Link } from "react-router-dom";
import emptyCartImg from "../../data/imgs/emptyCart.svg";
import { HiArrowCircleLeft } from "react-icons/hi";

function EmptyCart() {
  return (
    <main className="flex flex-col items-center justify-center">
      <img
        src={emptyCartImg}
        alt="Empty Cart"
        loading="lazy"
        className="w-3/4 max-w-sm drop-shadow-md"
      />

      <section className="mt-6 space-y-3 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-600 uppercase md:text-4xl">
          Your Cart is Empty
        </h1>
        <p className="mx-auto text-sm font-medium text-gray-500 md:text-base">
          Start exploring our products and find something you love.
        </p>
      </section>

      <Link
        to="/"
        className="my-10 flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-yellow-600 hover:shadow-xl"
      >
        <HiArrowCircleLeft className="text-2xl" />
        Back To Home
      </Link>
    </main>
  );
}

export default EmptyCart;
