import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className="" key={i}>
          <div className="relative flex h-[420px] items-center rounded-3xl bg-white p-10">
            <div className="flex w-1/2 flex-col justify-center pr-8">
              <h2 className="text-4xl font-extrabold text-gray-800">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {slide.description}
              </p>

              <ul className="mt-8 space-y-4 text-gray-700">
                {slide.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 shadow-sm">
                      {feature.icon}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <a
                  href="/"
                  className="rounded-full bg-blue-500 px-8 py-3.5 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="flex w-1/2 justify-center">
              <img
                src={slide.img}
                alt="Store banner"
                className="max-h-96 drop-shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
