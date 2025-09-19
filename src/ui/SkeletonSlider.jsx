import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./SkeletonCard";

function SkeletonSlider() {
  return (
    <div className="relative pt-12 pb-0">
      <div className="mb-8 text-center">
        <Skeleton height={40} width={250} className="mx-auto" />
        <Skeleton
          height={6}
          width={100}
          className="mx-auto mt-3 rounded-full"
        />
      </div>

      <div className="relative px-4 py-8">
        <Swiper
          className="drop-shadow-xl"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {[...Array(4)].map((_, i) => (
            <SwiperSlide key={i}>
              <SkeletonCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SkeletonSlider;
