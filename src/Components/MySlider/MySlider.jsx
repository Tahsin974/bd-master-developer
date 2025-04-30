import { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MySlider.css";

import { Navigation, Pagination } from "swiper/modules";

const MySlider = ({
  children,
  buttonPrev,
  buttonNext,
  view = 6,
  mobileViewXs = 2,
  mobileView = 2,
  tabletView = 3,
  laptopView = 4,
  isPagination = true,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <div className="relative ">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={isPagination}
        loop={true}
        slidesPerView={mobileViewXs}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: mobileViewXs,
            spaceBetween: 10,
          },
          420: {
            slidesPerView: mobileView,
            spaceBetween: 10,
          },
          612: {
            slidesPerView: tabletView,
            spaceBetween: 30,
          },

          880: {
            slidesPerView: tabletView,
            spaceBetween: 30,
          },
          1006: {
            slidesPerView: laptopView,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: view,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        className={`mySwiper ${
          isPagination ? "my-swiper-wrapper" : "my-swiper-wrapper2"
        }`}
      >
        {children}
      </Swiper>
      <button ref={prevRef} className={buttonPrev}>
        ❮
      </button>
      <button ref={nextRef} className={buttonNext}>
        ❯
      </button>
    </div>
  );
};

export default MySlider;
