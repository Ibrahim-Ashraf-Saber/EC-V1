import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../features/products/Product";
import ProductsSlider from "../features/products/ProductsSlider";
import {
  getProductById,
  getProductsByCategory,
} from "../features/products/productsSlice";
import SkeletonSlider from "../ui/SkeletonSlider";
import SkeletonProduct from "../ui/SkeletonProduct";

function ProductDetails() {
  const { productId } = useParams();
  const { product, status, productsByCategory, pByCategoryStatus } =
    useSelector((state) => state.products);

  const isLoadingP = status === "loading";
  const isLoadingC = pByCategoryStatus === "loading";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    if (product?.category) {
      dispatch(getProductsByCategory({ category: product.category }));
    }
  }, [product.category, dispatch]);

  return (
    <div className="divide-y divide-gray-300">
      {isLoadingP ? <SkeletonProduct /> : <Product product={product} />}

      {isLoadingC ? (
        <SkeletonSlider />
      ) : (
        <ProductsSlider
          title="Related Products"
          products={productsByCategory}
        />
      )}
    </div>
  );
}

export default ProductDetails;
