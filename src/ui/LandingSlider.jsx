import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaShippingFast,
  FaStar,
  FaHeadset,
  FaTags,
  FaLock,
} from "react-icons/fa";
import img1 from "../data/imgs/landingSlider-1.svg";
import img2 from "../data/imgs/landingSlider-2.svg";
import img3 from "../data/imgs/landingSlider-3.svg";

const slides = [
  {
    title: "Welcome to Our Store",
    description: "The best products at your fingertips",
    features: [
      { icon: <FaShippingFast />, text: "Fast Delivery" },
      { icon: <FaStar />, text: "Best Quality Products" },
      { icon: <FaHeadset />, text: "24/7 Customer Support" },
    ],
    img: img1,
  },
  {
    title: "Discover New Deals",
    description: "Unbeatable prices you’ll love",
    features: [
      { icon: <FaTags />, text: "Huge Discounts" },
      { icon: <FaStar />, text: "Limited Offers" },
      { icon: <FaShippingFast />, text: "Daily Deals" },
    ],
    img: img2,
  },
  {
    title: "Shop with Confidence",
    description: "Your satisfaction is our priority",
    features: [
      { icon: <FaLock />, text: "Secure Payment" },
      { icon: <FaShippingFast />, text: "Easy Returns" },
      { icon: <FaStar />, text: "Trusted by Thousands" },
    ],
    img: img3,
  },
];

export default function App() {
  return (
    <Swiper
      className="mb-5 drop-shadow-xl"
      loop={true}
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative flex flex-col-reverse items-center gap-5 rounded-3xl bg-white p-4 sm:p-6 md:flex-row md:gap-6 md:p-10 lg:gap-8 dark:bg-gray-900">
            <div className="flex w-full flex-col justify-center md:w-1/2 md:pr-8 lg:pr-10">
              <h2 className="text-center text-lg font-extrabold text-gray-800 sm:text-xl md:text-left md:text-3xl lg:text-4xl dark:text-gray-100">
                {slide.title}
              </h2>
              <p className="mt-1 text-center text-sm leading-relaxed text-gray-700 sm:text-base md:mt-4 md:text-left md:text-lg lg:text-xl dark:text-gray-300">
                {slide.description}
              </p>

              <ul className="mt-4 space-y-3 md:mt-8">
                {slide.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700 sm:text-base md:text-lg lg:text-lg dark:text-gray-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 shadow-sm dark:bg-blue-400/10 dark:text-blue-400">
                      {feature.icon}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div className="mt-4 mb-4 flex justify-center md:mt-12 md:justify-start">
                <button className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:px-6 sm:py-2.5 md:px-8 md:py-3.5 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex h-44 w-full justify-center sm:h-52 md:h-80 md:w-1/2 lg:h-[350px]">
              <img
                src={slide.img}
                alt="Store banner"
                className="w-full max-w-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
