import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite";
import SectionTitle from "../../../Components/Section-Title/SectionTitle";

import "./Project.css";
import thumbnail from "../../../assets/Project-Page/project-thumbnail.png";
import projectLogo from "../../../assets/Project-Page/project-logo.png";
import projectTools from "../../../assets/Project-Page/projectTools.svg";
import IconShowcase from "../../../Components/IconShowcase/IconShowcase";
const Projects = () => {
  return (
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-20">
      <div className="max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 space-y-16">
        {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
        <SectionTitle
          heading={`Explore Our Ux -Ui  all projects`}
          subheading={"Project"}
        >
          <p className="ruluko-regular font-semibold text-gray-500">
            Bd Master Developer works in multiple Sector including website
            development,API development,Digital Marketing , UI/UX & SEO.Our
            dream is to continue your journey with success{" "}
          </p>
        </SectionTitle>
        {/* 
        --------------------------------------------------
                            Services
        --------------------------------------------------
        */}
        <div className="grid xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-4 space-y-12 ">
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          <div className="card project-card h-full ">
            <figure>
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              <IconShowcase icon={projectLogo} />
              <div className="max-w-[150px] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
