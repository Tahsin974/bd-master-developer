// Importing necessary modules and components
import { SwiperSlide } from "swiper/react"; // SwiperSlide for creating individual slides in a swiper
import MySlider from "../../../../Components/MySlider/MySlider"; // Custom MySlider component to wrap around Swiper

import useTechnology from "../../../../Utils/Hooks/useTechnology";

// Functional component for Digital Marketing Tab Panel
const DigitalTabPanel = () => {
  const [technologies, isPending] = useTechnology("Digital Marketing");

  return (
    <div>
      {!isPending ? (
        <div>
          {/* The MySlider component is used to create the carousel/slider */}
          <MySlider
            // Custom styles for the 'Previous' button
            buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2 z-10 btn-prev text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
            // Custom styles for the 'Next' button
            buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2 z-10 btn-next text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          >
            {/* Mapping through the digitalMarketingtechnologys array to generate individual slides */}
            {technologies.map((technology) => (
              <SwiperSlide key={technology._id}>
                {/* Card for each technology */}
                <div className="card bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px] h-[320px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
                  <div className="items-center text-center space-y-3.5">
                    {/* Category label for the technology */}
                    <div className="w-[max-content] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)] rounded-3xl mb-4">
                      <p>{technology.subCategory}</p>
                    </div>
                    {/* Image representing the technology */}
                    <div className="w-[130px] h-[130px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                      <img
                        className="w-[65px] h-[65px]"
                        src={technology.img}
                        alt={technology.name}
                      />
                    </div>
                    {/* Name of the technology */}
                    <h5 className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-md font-semibold">
                      {technology.name}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </MySlider>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default DigitalTabPanel;
