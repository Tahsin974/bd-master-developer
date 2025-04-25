import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./WebsiteTabPanel.css";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
const WebsiteTabPanel = () => {
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
    <>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            420: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            612: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            880: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Website Development Card #193cb8
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Front End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">HTML</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          UI UX Card #193cb8
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Front End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">CSS</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Digital Marketing Card #193cb8
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Front End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">JavaScript</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          SEO Card #193cb8
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Front End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">React js</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Video Editing Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Front End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Vue js</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*
          ----------------------------------------------
          Graphics Design Card 
          ----------------------------------------------
          */}
            <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
              <div className="items-center  text-center space-y-3.5 ">
                <div className="w-[90px] p-1 mx-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                  <p>Back End</p>
                </div>
                <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                </div>
                <h5 className="text-lg font-semibold">Laraval</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          ref={prevRef}
          className="absolute xl:left-[35%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-black cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]"
        >
          ❮
        </button>
        <button
          ref={nextRef}
          className="absolute xl:right-[35%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-black cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]"
        >
          ❯
        </button>
      </div>
    </>
  );
};

export default WebsiteTabPanel;
