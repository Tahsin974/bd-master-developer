import React from "react";
import MySlider from "../../../../Components/MySlider/MySlider";
import { SwiperSlide } from "swiper/react";

const GraphicsTabPanel = () => {
  const graphicsDesignSkills = [
    {
      category: "Graphics Design",
      name: "Branding & Identity",
      icon: "branding",
    },
    { category: "Graphics Design", name: "Typography", icon: "typography" },
    { category: "Graphics Design", name: "Color Theory", icon: "color" },
    {
      category: "Graphics Design",
      name: "Layout & Composition",
      icon: "layout",
    },
    {
      category: "Graphics Design",
      name: "Illustration",
      icon: "illustration",
    },
    {
      category: "Graphics Design",
      name: "Image Editing (Photoshop)",
      icon: "photoshop",
    },
    {
      category: "Graphics Design",
      name: "Vector Graphics (Illustrator)",
      icon: "illustrator",
    },
    { category: "Graphics Design", name: "Print Design", icon: "print" },
    { category: "Graphics Design", name: "Motion Graphics", icon: "motion" },
    {
      category: "Graphics Design",
      name: "UI/UX Design (Basics)",
      icon: "uiux",
    },
  ];
  return (
    <div>
      <div>
        <MySlider
          buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
        >
          {graphicsDesignSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  h-[320px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
                <div className="items-center  text-center space-y-3.5 ">
                  <div className="w-[120px] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                    <p>{skill.category}</p>
                  </div>
                  <div className="w-[130px] h-[130px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                    {/* <img className="w-10 h-10" src={graphicsDesign} /> */}
                  </div>
                  <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-md font-semibold">
                    {skill.name}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </MySlider>
      </div>
    </div>
  );
};

export default GraphicsTabPanel;
