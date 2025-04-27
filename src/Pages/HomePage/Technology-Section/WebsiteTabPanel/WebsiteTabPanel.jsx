import { SwiperSlide } from "swiper/react";
import MySlider from "../../../../Components/MySlider/MySlider";

const WebsiteTabPanel = () => {
  const websiteSkills = [
    {
      category: "Front End",
      name: "HTML",
      icon: "5",
    },
    {
      category: "Front End",
      name: "CSS",
      icon: "3",
    },
    {
      category: "Front End",
      name: "JavaScript",
      icon: "JS",
    },
    {
      category: "Front End",
      name: "React js",
      icon: "⚛",
    },
    {
      category: "Back End",
      name: "Java",
      icon: "☕",
    },
    {
      category: "Back End",
      name: "PHP",
      icon: "php",
    },
    {
      category: "Front End",
      name: "Angular",
      icon: "A", // Example icon
    },
    {
      category: "Front End",
      name: "Vue.js",
      icon: "V", // Example icon
    },
    {
      category: "Back End",
      name: "Node.js",
      icon: "N", // Example icon
    },
    {
      category: "Back End",
      name: "Python",
      icon: "Py", // Example icon
    },
    {
      category: "Database",
      name: "MySQL",
      icon: "M", // Example icon
    },
    {
      category: "Database",
      name: "MongoDB",
      icon: "m", // Example icon
    },
  ];

  return (
    <>
      <div>
        <MySlider
          buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
        >
          {websiteSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="card  bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px]  xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7">
                <div className="items-center  text-center space-y-3.5 ">
                  <div className="w-[90px] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  mb-4">
                    <p>{skill.category}</p>
                  </div>
                  <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
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
    </>
  );
};

export default WebsiteTabPanel;
