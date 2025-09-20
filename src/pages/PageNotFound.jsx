import { Link } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";
import notFound from "../data/imgs/notFound.svg";

function PageNotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center dark:bg-gray-950">
      <img
        src={notFound}
        alt="Not Found"
        loading="lazy"
        className="w-3/4 max-w-sm drop-shadow-md"
      />

      <section className="mt-6 space-y-3 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-600 uppercase md:text-4xl dark:text-blue-400">
          Page Not Found
        </h1>
        <p className="mx-auto text-sm font-medium text-gray-500 md:text-base dark:text-gray-400">
          Oops! The page you are looking for does not exist.
        </p>
      </section>

      <Link
        to="/"
        className="my-10 flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-yellow-600 hover:shadow-xl dark:bg-yellow-600 dark:hover:bg-yellow-700"
      >
        <HiArrowCircleLeft className="text-2xl" />
        Back To Home
      </Link>
    </main>
  );
}

export default PageNotFound;
