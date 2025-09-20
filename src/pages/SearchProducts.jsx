import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { searchProducts } from "../features/products/productsSlice";
import ProductItem from "../features/products/ProductItem";
import SkeltonSlider from "../ui/SkeletonSlider";
import EmptySearch from "../features/search/EmptySearch";

function SearchProducts() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { searchResults, status } = useSelector((state) => state.products);
  const isLoading = status === "loading";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProducts(query));
  }, [query, dispatch]);

  if (isLoading) return <SkeltonSlider />;

  if (searchResults.length === 0) return <EmptySearch />;

  return (
    <div>
      <div className="mb-2 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-100">
          Results for: {query}
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
      </div>

      <div className="my-5 flex flex-wrap items-center justify-center gap-7 drop-shadow-xl">
        {searchResults.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SearchProducts;
