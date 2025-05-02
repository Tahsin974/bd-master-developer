import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Import SectionTitle component
import web from "../../../assets/Services-Section/web-development.png"; // Import the image for web development service
import UiUx from "../../../assets/Services-Section/ui-ux.png"; // Import the image for UI/UX design service
import digital from "../../../assets/Services-Section/digital-marketing.png"; // Import the image for digital marketing service
import seo from "../../../assets/Services-Section/seo.png"; // Import the image for SEO service
import videoEdit from "../../../assets/Services-Section/video-editing.png"; // Import the image for video editing service
import graphicsDesign from "../../../assets/Services-Section/graphic-design.png"; // Import the image for graphic design service

import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <div>
      {/* Container with background color and padding */}
      <div className=" bg-[#F8FDFE] py-20 ">
        <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
          {/* Section Title */}
          <SectionTitle
            heading={
              <>
                <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                  Industry
                </span>{" "}
                We Serve
              </>
            }
            subheading={"Services"}
          >
            {/* Description text below the Section Title */}
            <p className="ruluko-regular font-semibold text-gray-500">
              We offer a full range of digital services including Website
              Development, API Integration, UI/UX Design, SEO, and Digital
              Marketing. <strong>Bd Master Developer</strong> is your all-in-one
              tech partner for growth.
            </p>
          </SectionTitle>

          {/* Services grid layout */}
          <div className="service-section-cards">
            {/* Website Development Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center">
                {/* Icon and title for Website Development */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={web} alt="Web Development" />
                </div>
                <h5 className="text-lg font-semibold">Website Development</h5>
              </div>
            </div>

            {/* UI/UX Design Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center space-y-3.5">
                {/* Icon and title for UI/UX Design */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={UiUx} alt="UI/UX Design" />
                </div>
                <h5 className="text-lg font-semibold mt-7">UI/UX Design</h5>
              </div>
            </div>
            {/* Graphics Design Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center space-y-3.5">
                {/* Icon and title for Graphics Design */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img
                    className="w-10 h-10"
                    src={graphicsDesign}
                    alt="Graphics Design"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-7">Graphics Design</h5>
              </div>
            </div>

            {/* Digital Marketing Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center space-y-3.5">
                {/* Icon and title for Digital Marketing */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img
                    className="w-10 h-10"
                    src={digital}
                    alt="Digital Marketing"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-7">
                  Digital Marketing
                </h5>
              </div>
            </div>

            {/* SEO Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center space-y-3.5">
                {/* Icon and title for SEO */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={seo} alt="SEO" />
                </div>
                <h5 className="text-lg font-semibold mt-7">SEO</h5>
              </div>
            </div>

            {/* Video Editing Service Card */}
            <div className="card service-section-card transition duration-300 ease-in-out hover:-translate-y-4 my-auto px-3 py-7">
              <div className="items-center text-center space-y-3.5">
                {/* Icon and title for Video Editing */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                  <img
                    className="w-10 h-10"
                    src={videoEdit}
                    alt="Video Editing"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-7">Video Editing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
