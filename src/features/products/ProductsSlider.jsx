import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductItem from "./ProductItem";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function ProductsSlider({ title, products }) {
  const prevBtnClass = `custom-prev-${title.replace(" ", "-")}`;
  const nextBtnClass = `custom-next-${title.replace(" ", "-")}`;

  return (
    <div className="relative pt-12 pb-0">
      <div className="mb-2 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800 uppercase">
          {title.replace("-", " ")}
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-blue-500"></div>
      </div>

      <div className="relative px-4 py-8">
        <Swiper
          className="drop-shadow-xl"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: `.${nextBtnClass}`,
            prevEl: `.${prevBtnClass}`,
          }}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {(Array.isArray(products) ? products : []).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className={`${prevBtnClass} flex cursor-pointer items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-xl transition-colors hover:bg-blue-700`}
          >
            <HiOutlineChevronLeft size={20} />
          </button>
          <button
            className={`${nextBtnClass} flex cursor-pointer items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-xl transition-colors hover:bg-blue-700`}
          >
            <HiOutlineChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
