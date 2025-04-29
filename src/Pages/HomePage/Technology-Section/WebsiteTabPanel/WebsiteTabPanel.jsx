import { SwiperSlide } from "swiper/react"; // Importing SwiperSlide to create slides in the Swiper carousel
import MySlider from "../../../../Components/MySlider/MySlider"; // Importing custom slider component
import html from "../../../../assets/Technology-Section/Web-Panel/html.png"; // Importing image assets for skills
import css from "../../../../assets/Technology-Section/Web-Panel/css.png";
import js from "../../../../assets/Technology-Section/Web-Panel/js.png";
import react from "../../../../assets/Technology-Section/Web-Panel/react.png";
import php from "../../../../assets/Technology-Section/Web-Panel/php.png";
import vue from "../../../../assets/Technology-Section/Web-Panel/vuejs.png";
import node from "../../../../assets/Technology-Section/Web-Panel/nodejs.png";
import laraval from "../../../../assets/Technology-Section/Web-Panel/laraval.png";
import sql from "../../../../assets/Technology-Section/Web-Panel/mysql.png";
import mongodb from "../../../../assets/Technology-Section/Web-Panel/mongodb.png";

const WebsiteTabPanel = () => {
  // Array of skills categorized by Front End, Back End, and Database
  const websiteSkills = [
    {
      category: "Front End", // Category for frontend technologies
      name: "HTML", // Skill name
      img: html, // Skill image
    },
    {
      category: "Front End",
      name: "CSS",
      img: css,
    },
    {
      category: "Front End",
      name: "JavaScript",
      img: js,
    },
    {
      category: "Front End",
      name: "React js",
      img: react,
    },
    {
      category: "Back End",
      name: "PHP",
      img: php,
    },
    {
      category: "Front End",
      name: "Vue.js",
      img: vue,
    },
    {
      category: "Back End",
      name: "Node.js",
      img: node,
    },
    {
      category: "Back End",
      name: "Laraval",
      img: laraval,
    },
    {
      category: "Database",
      name: "MySQL",
      img: sql,
    },
    {
      category: "Database",
      name: "MongoDB",
      img: mongodb,
    },
  ];

  return (
    <>
      <div>
        {/* Custom Slider (MySlider) */}
        <MySlider
          buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Custom styling for previous button
          buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Custom styling for next button
        >
          {/* Loop through websiteSkills array to create a swiper slide for each skill */}
          {websiteSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px] xl:h-[248px] lg:h-[248px] md:h-[248px] sm:h-[248px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
                {/* Card layout */}
                <div className="items-center text-center space-y-3.5">
                  {/* Category label */}
                  <div className="w-[max-content] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)] rounded-3xl mb-4">
                    <p>{skill.category}</p>
                  </div>
                  {/* Skill icon */}
                  <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img className="w-[60px] h-[60px]" src={skill.img} />
                  </div>
                  {/* Skill name */}
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
