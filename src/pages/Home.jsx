import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductsByCategory } from "../features/products/productsSlice";
import ProductsSlider from "../features/products/ProductsSlider";
import LandingSlider from "../ui/LandingSlider";
import SkeletonSlider from "../ui/SkeletonSlider";

function Home() {
  const dispatch = useDispatch();
  const { productsByCategory, status } = useSelector((state) => state.products);
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(getAllProductsByCategory());
  }, [dispatch]);

  return (
    <div>
      <LandingSlider />

      {isLoading ? (
        <SkeletonSlider />
      ) : (
        Object.entries(productsByCategory).map(([category, products]) => (
          <ProductsSlider key={category} title={category} products={products} />
        ))
      )}
    </div>
  );
}

export default Home;
