// Import necessary modules and components
import { SwiperSlide } from "swiper/react";
import MySlider from "../../../../Components/MySlider/MySlider"; // Custom slider component
// Import images for the video editing skills
import cut from "../../../../assets/Technology-Section/VideoEditingPanel/cut.png";
import motion from "../../../../assets/Technology-Section/VideoEditingPanel/motion.png";
import color from "../../../../assets/Technology-Section/VideoEditingPanel/color.png";
import audio from "../../../../assets/Technology-Section/VideoEditingPanel/audio.png";
import vfx from "../../../../assets/Technology-Section/VideoEditingPanel/vfx.png";
import story from "../../../../assets/Technology-Section/VideoEditingPanel/story.png";
import encode from "../../../../assets/Technology-Section/VideoEditingPanel/encode.png";
import software from "../../../../assets/Technology-Section/VideoEditingPanel/software.png";
import multicamera from "../../../../assets/Technology-Section/VideoEditingPanel/multi-camera.png";

const VideoEditingTabPanel = () => {
  // Array holding the video editing skills with category, name, and image
  const videoEditingSkills = [
    {
      category: "Video Editing",
      name: "Video Cutting & Trimming", // Skill name
      img: cut, // Skill image
    },
    { category: "Video Editing", name: "Motion Graphics", img: motion },
    {
      category: "Video Editing",
      name: "Color Correction & Grading",
      img: color,
    },
    { category: "Video Editing", name: "Audio Editing", img: audio },
    { category: "Video Editing", name: "Visual Effects (VFX)", img: vfx },
    { category: "Video Editing", name: "Storytelling", img: story },
    {
      category: "Video Editing",
      name: "Video Encoding & Export",
      img: encode,
    },
    {
      category: "Video Editing",
      name: "Software Proficiency",
      img: software,
    },
    {
      category: "Video Editing",
      name: "Multi-Camera Editing",
      img: multicamera,
    },
  ];

  return (
    <div>
      <div>
        {/* MySlider is a custom slider component that is being used here */}
        <MySlider
          // Custom previous button styling for navigation
          buttonPrev={`absolute xl:left-[34%] lg:left-[30%] md:left-[25%] sm:left-[20%] left-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          // Custom next button styling for navigation
          buttonNext={`absolute xl:right-[34%] lg:right-[30%] md:right-[25%] sm:right-[20%] right-[30%] xl:-bottom-9 lg:-bottom-9 md:-bottom-9 sm:-bottom-9 bottom-6 -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
        >
          {/* Loop through video editing skills array and generate SwiperSlide for each skill */}
          {videoEditingSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              {/* Card for each skill containing category, image, and name */}
              <div className="card bg-[#F8FDFE] xl:w-[184px] lg:w-[184px] md:w-[184px] sm:w-[184px] h-[300px] custom-shadow rounded-2xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
                {/* Centered content inside each card */}
                <div className="items-center text-center space-y-3.5">
                  {/* Category label for each skill */}
                  <div className="w-[max-content] py-1.5 px-3.5 mx-auto text-center text-xs text-gray-500 bg-[rgba(176,231,238,0.4)] rounded-3xl mb-4">
                    <p>{skill.category}</p> {/* Display the category */}
                  </div>
                  {/* Skill image in a centered box */}
                  <div className="w-[120px] h-[120px] mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img
                      className="w-[60px] h-[60px]"
                      src={skill.img}
                      alt={`${skill.name} icon`}
                    />{" "}
                    {/* Image for skill */}
                  </div>
                  {/* Display the skill name */}
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

export default VideoEditingTabPanel;
