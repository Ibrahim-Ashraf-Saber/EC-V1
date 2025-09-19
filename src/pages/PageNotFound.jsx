import { Link } from "react-router-dom";
import notFound from "../data/imgs/notFound.svg";
import { HiArrowCircleLeft } from "react-icons/hi";

function PageNotFound() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center overflow-hidden bg-gray-50">
      <img
        src={notFound}
        alt="Not Found Image"
        loading="lazy"
        className="w-[80%] md:w-1/4"
      />
      <section className="space-y-2">
        <h1 className="text-center text-2xl font-bold text-blue-500 uppercase md:text-4xl">
          Page Not Found
        </h1>
        <p className="text-center text-xs font-semibold text-gray-500 md:text-sm">
          Oops! The page you are looking for does not exist.
        </p>
      </section>
      <Link
        to="/"
        className="mt-10 flex items-center justify-center gap-2 rounded bg-yellow-500 px-4 py-2 text-xl text-yellow-50 shadow-xl transition-all hover:scale-105 hover:bg-yellow-600"
      >
        <HiArrowCircleLeft />
        Back To Home
      </Link>
    </main>
  );
}

export default PageNotFound;
