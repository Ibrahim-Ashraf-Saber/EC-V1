import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./ui/Loader";

const Home = lazy(() => import("./pages/Home"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CategoryDetails = lazy(() => import("./pages/CategoryDetails"));
const SearchProducts = lazy(() => import("./pages/SearchProducts"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/categroy/:category" element={<CategoryDetails />} />
            <Route path="/search" element={<SearchProducts />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
