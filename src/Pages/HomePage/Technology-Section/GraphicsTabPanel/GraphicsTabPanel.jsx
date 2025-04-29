// Importing necessary modules and components
import React from "react"; // React import for building the component
import MySlider from "../../../../Components/MySlider/MySlider"; // Importing custom MySlider component
import { SwiperSlide } from "swiper/react"; // Importing SwiperSlide from the Swiper library to create slides

// Importing image assets for various Graphics Design tools and concepts
import branding from "../../../../assets/Technology-Section/GraphicsDesignPanel/branding.png";
import typography from "../../../../assets/Technology-Section/GraphicsDesignPanel/typography.png";
import color from "../../../../assets/Technology-Section/GraphicsDesignPanel/color.png";
import layout from "../../../../assets/Technology-Section/GraphicsDesignPanel/layout.png";
import illustrator from "../../../../assets/Technology-Section/GraphicsDesignPanel/illustrator.png";
import photoshop from "../../../../assets/Technology-Section/GraphicsDesignPanel/photoshop.png";
import vector from "../../../../assets/Technology-Section/GraphicsDesignPanel/vector.png";
import printDesign from "../../../../assets/Technology-Section/GraphicsDesignPanel/printDesign.png";
import uiux from "../../../../assets/Technology-Section/GraphicsDesignPanel/uiux.png";

// Functional component for the Graphics Design Tab Panel
const GraphicsTabPanel = () => {
  // Array of objects that define the skills for Graphics Design
  const graphicsDesignSkills = [
    { category: "Graphics Design", name: "Branding & Identity", img: branding },
    { category: "Graphics Design", name: "Typography", img: typography },
    { category: "Graphics Design", name: "Color Theory", img: color },
    { category: "Graphics Design", name: "Layout & Composition", img: layout },
    {
      category: "Graphics Design",
      name: "Adobe Illustrator",
      img: illustrator,
    },
    { category: "Graphics Design", name: "Adobe Photoshop", img: photoshop },
    { category: "Graphics Design", name: "Vector Graphics", img: vector },
    { category: "Graphics Design", name: "Print Design", img: printDesign },
    { category: "Graphics Design", name: "UI/UX Design (Basics)", img: uiux },
  ];

  return (
    <div>
      <div>
        {/* The MySlider component is used to create the carousel/slider of skills */}
        <MySlider
          // Custom styles for the 'Previous' button (position, size, color, etc.)
          buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          // Custom styles for the 'Next' button (position, size, color, etc.)
          buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
        >
          {/* Iterating over the graphicsDesignSkills array and displaying each skill in a SwiperSlide */}
          {graphicsDesignSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              {/* Card for each skill with custom styling */}
              <div className="card bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px] h-[320px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
                {/* Centering the content inside the card */}
                <div className="items-center text-center space-y-3.5">
                  {/* Category label (e.g., Graphics Design) */}
                  <div className="w-[max-content] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)] rounded-3xl mb-4">
                    <p>{skill.category}</p> {/* Displaying the category */}
                  </div>
                  {/* Image container for skill image, styled with background and shadow */}
                  <div className="w-[130px] h-[130px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img
                      className="w-[65px] h-[65px]"
                      src={skill.img}
                      alt={skill.name}
                    />{" "}
                    {/* Image representing the skill */}
                  </div>
                  {/* Skill name displayed in a large font */}
                  <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-md font-semibold">
                    {skill.name} {/* Skill name */}
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
