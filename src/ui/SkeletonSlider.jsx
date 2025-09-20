import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import SkeletonCard from "./SkeletonCard";
import "swiper/css";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";

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
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          modules={[Navigation]}
        >
          {Array.from({ length: 4 }, (_, i) => (
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
