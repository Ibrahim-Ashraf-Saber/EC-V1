import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductImageSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto w-full max-w-4xl select-none">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-4 rounded-xl shadow-md"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="h-96 w-full rounded-xl bg-gray-50 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="h-24 w-24 rounded-lg border border-gray-200 object-contain transition hover:border-blue-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
