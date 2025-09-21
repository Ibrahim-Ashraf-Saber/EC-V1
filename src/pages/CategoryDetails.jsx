import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductsByCategory } from "../features/products/productsSlice";
import ProductItem from "../features/products/ProductItem";
import SkeletonCategoryDetails from "../ui/SkeletonCategoryDetails";

function CategoryDetails() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "price";
  const order = searchParams.get("order") || "asc";

  const [sort, setSort] = useState("low");
  const dispatch = useDispatch();
  const { productsByCategory, pByCategoryStatus } = useSelector(
    (state) => state.products,
  );
  const isLoading = pByCategoryStatus === "loading";

  useEffect(() => {
    if (sort === "low") {
      setSearchParams({ sortBy: "price", order: "asc" });
    } else if (sort === "high") {
      setSearchParams({ sortBy: "price", order: "desc" });
    } else if (sort === "a-title") {
      setSearchParams({ sortBy: "title", order: "asc" });
    } else if (sort === "z-title") {
      setSearchParams({ sortBy: "title", order: "desc" });
    }
  }, [sort, setSearchParams]);

  useEffect(() => {
    dispatch(getProductsByCategory({ category, sortBy, order }));
  }, [category, dispatch, sortBy, order]);

  if (isLoading) return <SkeletonCategoryDetails />;

  return (
    <div className="px-6 py-10">
      <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <h2 className="text-3xl font-bold text-gray-800 capitalize dark:text-gray-100">
          {category.replace("-", " ")} Products
        </h2>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="font-medium text-gray-700 dark:text-gray-300"
          >
            Sort:
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            id="sort"
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm transition outline-none hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-500"
          >
            <option value="low">Low price</option>
            <option value="high">High price</option>
            <option value="a-title">A - Z</option>
            <option value="z-title">Z - A</option>
          </select>
        </div>
      </div>

      <div className="my-5 flex flex-wrap items-center justify-center gap-7 drop-shadow-xl">
        {Array.isArray(productsByCategory) &&
          productsByCategory.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryDetails;
