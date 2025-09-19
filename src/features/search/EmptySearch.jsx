import emptySearchImg from "../../data/imgs/noSearch.svg";

function EmptySearch() {
  return (
    <main className="-mt-15 flex flex-col items-center justify-center">
      <img
        src={emptySearchImg}
        alt="Empty Cart"
        loading="lazy"
        className="w-3/4 max-w-sm drop-shadow-md"
      />

      <section className="mt-3 space-y-3 text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-600 uppercase md:text-4xl">
          No Results Found
        </h1>
        <p className="mx-auto text-sm font-medium text-gray-500 md:text-base">
          Try different keywords or check back later.
        </p>
      </section>
    </main>
  );
}

export default EmptySearch;
