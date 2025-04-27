import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import web from "../../../assets/Services-Section/web-development.svg";
import UiUx from "../../../assets/Services-Section/ui-ux.svg";
import digital from "../../../assets/Services-Section/digital-marketing.svg";
import seo from "../../../assets/Services-Section/seo.svg";
import videoEdit from "../../../assets/Services-Section/video-editing.svg";
import graphicsDesign from "../../../assets/Services-Section/graphic-design.svg";

const ServiceSection = () => {
  return (
    <div>
      <div className=" bg-[#F8FDFE] py-10 my-24 ">
        <div className="max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 space-y-16">
          {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
          <SectionTitle heading={"Industry We Serve"} subheading={"Services"}>
            <p className="ruluko-regular font-semibold text-gray-500">
              Bd Master Developer works in multiple Sector including website
              development,API development,Digital Marketing , UI/UX & SEO.Our
              dream is to continue your journey with success{" "}
            </p>
          </SectionTitle>
          {/*
          -----------------------------------------------
          Services 
          -----------------------------------------------
          */}
          <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center-safe">
            {/*
          ----------------------------------------------
          Website Development Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center  ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={web} />
                </div>
                <h5 className="text-lg font-semibold ">Website Development</h5>
              </div>
            </div>
            {/*
          ----------------------------------------------
          UI UX Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center space-y-3.5 ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={UiUx} />
                </div>
                <h5 className="text-lg font-semibold mt-7">UI/UX Design</h5>
              </div>
            </div>
            {/*
          ----------------------------------------------
          Digital Marketing Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center space-y-3.5 ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={digital} />
                </div>
                <h5 className="text-lg font-semibold mt-7">
                  Digital Marketing
                </h5>
              </div>
            </div>
            {/*
          ----------------------------------------------
          SEO Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center space-y-3.5 ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={seo} />
                </div>
                <h5 className="text-lg font-semibold mt-7">SEO</h5>
              </div>
            </div>
            {/*
          ----------------------------------------------
          Video Editing Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center space-y-3.5 ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={videoEdit} />
                </div>
                <h5 className="text-lg font-semibold mt-7">Video Editing</h5>
              </div>
            </div>
            {/*
          ----------------------------------------------
          Graphics Design Card #193cb8
          ----------------------------------------------
          */}
            <div className="card   w-[184px] h-[200px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
              <div className="  items-center  text-center space-y-3.5 ">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                  <img className="w-10 h-10" src={graphicsDesign} />
                </div>
                <h5 className="text-lg font-semibold mt-7">Graphics Design</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
