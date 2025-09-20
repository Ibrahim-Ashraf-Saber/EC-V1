import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductItem from "./ProductItem";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function ProductsSlider({ title, products }) {
  const prevBtnClass = `custom-prev-${title.replace(" ", "-")}`;
  const nextBtnClass = `custom-next-${title.replace(" ", "-")}`;

  return (
    <div className="relative pt-12 pb-0">
      {title === "Related Products" ? (
        <div className="group mb-2 block text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
            {title.replace("-", " ")}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-blue-500 dark:bg-blue-400"></div>
        </div>
      ) : (
        <Link
          to={`/products/category/${title}`}
          className="group mb-2 block text-center transition-all hover:scale-105"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 uppercase transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {title.replace("-", " ")}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-blue-500 transition-all group-hover:w-32 group-hover:bg-blue-600 dark:bg-blue-400 dark:group-hover:bg-blue-300"></div>
        </Link>
      )}

      <div className="relative px-4 py-8">
        <Swiper
          className="drop-shadow-xl"
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: `.${nextBtnClass}`,
            prevEl: `.${prevBtnClass}`,
          }}
          modules={[Navigation]}
        >
          {Array.isArray(products) &&
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className={`${prevBtnClass} flex cursor-pointer items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-xl transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600`}
          >
            <HiOutlineChevronLeft size={20} />
          </button>
          <button
            className={`${nextBtnClass} flex cursor-pointer items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-xl transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600`}
          >
            <HiOutlineChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
