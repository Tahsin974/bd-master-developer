import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite"; // Custom Button component
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Custom SectionTitle component
import "./Project.css"; // Importing custom CSS for the Project page
import thumbnail from "../../../assets/Project-Page/project-thumbnail.png"; // Importing the project thumbnail image
import projectLogo from "../../../assets/Project-Page/project-logo.png"; // Importing project logo image
import projectTools from "../../../assets/Project-Page/projectTools.svg"; // Importing image representing project tools
import IconShowcase from "../../../Components/IconShowcase/IconShowcase"; // Custom IconShowcase component to show icons for the project

const Projects = () => {
  return (
    // Wrapper div with background color and padding
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-20">
      <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
        {/* Section Title */}
        <SectionTitle
          heading={`Explore Our Ux -Ui  all projects`} // The main heading
          subheading={"Project"} // The subheading
        >
          {/* A brief description of the section */}
          <p className="ruluko-regular font-semibold text-gray-500">
            Bd Master Developer works in multiple sectors including website
            development, API development, Digital Marketing, UI/UX & SEO. Our
            dream is to continue your journey with success{" "}
          </p>
        </SectionTitle>

        {/* Section for project cards */}
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-4 space-y-12 ">
          {/* Repeating card component for each project */}
          <div className="card project-card h-full ">
            <figure>
              {/* Project Thumbnail Image */}
              <img src={thumbnail} alt="project thumbnail" />
            </figure>
            <div className="card-body">
              {/* Showcase the project logo with a custom component */}
              <IconShowcase icon={projectLogo} />
              {/* Label for the project category */}
              <div className="w-[max-content] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)]  rounded-3xl  my-4">
                <p>UX-UI Design</p>
              </div>
              {/* Project title */}
              <h2 className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                HALAL Webapp
              </h2>
              {/* Description of the project */}
              <p>
                When it comes to UI/UX design, we create experiences that are
                simple to navigate.
              </p>
              {/* Tools used in the project */}
              <figure className="me-auto">
                <img src={projectTools} alt="projectTools" />
              </figure>
              <div className="mt-4">
                {/* Button to view the live project */}
                <ButtonWhite isButtonBlock={true}>
                  <span className="btn-link ">View live</span>
                </ButtonWhite>
              </div>
            </div>
          </div>

          {/* Duplicate the same structure for additional projects */}
          {/* You could later use a `.map()` function to generate these cards dynamically from an array */}
          {/* Repeating the same card layout for the other projects */}
          {[...Array(6)].map((_, index) => (
            <div className="card project-card h-full" key={index}>
              <figure>
                <img src={thumbnail} alt="project thumbnail" />
              </figure>
              <div className="card-body">
                <IconShowcase icon={projectLogo} />
                <div className="w-[max-content] py-1.5 px-3.5 text-xs me-auto text-center text-gray-500 bg-[rgba(176,231,238,0.4)] rounded-3xl my-4">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
