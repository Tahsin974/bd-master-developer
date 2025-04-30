// Importing necessary components and assets
import { SwiperSlide } from "swiper/react"; // Swiper slide component for carousel functionality
import MySlider from "../../../Components/MySlider/MySlider"; // Custom slider component (likely a wrapper around Swiper)
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // SectionTitle component for headings
import img from "../../../assets/TeamMembers-Section/expert1.png"; // Placeholder image for team members
import "./TeamMemberSection.css"; // Custom CSS file for styling the section
import { FaFacebookSquare } from "react-icons/fa"; // Facebook icon from react-icons
import { FaGlobe, FaLinkedin } from "react-icons/fa6"; // LinkedIn and Website icons from react-icons
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite"; // Custom button component

// TeamMemberSection component
const TeamMemberSection = () => {
  // Array containing information about team members
  const teamMembers = [
    {
      name: "Md.Rubel Islam",
      title: "Full Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Siyam Mollah",
      title: "WordPress Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Tahsin Islam",
      title: "MERN Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Abu Fahin",
      title: "UX-UI Designer",
      facebookUrl: "YOUR_FACEBOOK_URL_ABU", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_ABU", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_ABU", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Md.Rubel Islam",
      title: "Full Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Siyam Mollah",
      title: "WordPress Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Tahsin Islam",
      title: "MERN Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
    {
      name: "Abu Fahin",
      title: "UX-UI Designer",
      facebookUrl: "YOUR_FACEBOOK_URL_ABU", // Placeholder for actual Facebook URL
      linkedinUrl: "YOUR_LINKEDIN_URL_ABU", // Placeholder for actual LinkedIn URL
      websiteUrl: "YOUR_WEBSITE_URL_ABU", // Placeholder for actual website URL
      profileImage: img, // Placeholder profile image
    },
  ];

  console.log(teamMembers); // Logging team members data (for debugging)

  return (
    <div className="bg-[#F8FDFE] h-[min-content] my-24 py-10 ">
      <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-5">
        {/* Section Title with a gradient color for "Dedicated" */}
        <SectionTitle
          heading={
            <>
              Our{" "}
              <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                Dedicated
              </span>{" "}
              Team
            </>
          }
          subheading={"Team Member"}
        />
        <div>
          {/* Slider Component (MySlider) to display team members */}
          <MySlider
            view={5} // Number of slides to show at once (5)
            mobileViewXs={1} // Number of slides to show on small screens (1)
            isPagination={false} // Disable pagination
            buttonPrev={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[17%] lg:right-[17%] md:right-[22%] sm:right-[22%] right-[60%] -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
            buttonNext={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[10%] lg:right-[10%] md:right-[10%] sm:right-[10%] right-[30%]  -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
          >
            {/* Mapping over the team members to render each SwiperSlide */}
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="card custom-shadow xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[300px] h-[300px] pb-3 ">
                  {/* Team member image and social media links */}
                  <figure className="relative card-animation">
                    <img
                      src={member.profileImage} // Displaying team member profile image
                      alt="profile" // Alt text for accessibility
                      className="rounded-xl"
                    />
                    {/* Overlaying social media buttons */}
                    <div className="absolute top-0 h-full w-full social-links flex justify-evenly items-center">
                      <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                        <FaFacebookSquare
                          className="text-[#0866ff]"
                          size={20}
                        />
                      </button>
                      <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                        <FaLinkedin className="text-[#0a66c2]" size={20} />
                      </button>
                      <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                        <FaGlobe className="text-[#1D2345]" size={20} />
                      </button>
                    </div>
                  </figure>
                  {/* Team member name and title */}
                  <div className="card-body p-2 items-center text-center">
                    <h2 className="card-title">{member.name}</h2>
                    <p className="text-gray-500">{member.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </MySlider>
          {/* Button to view more members (could link to another page or load more members dynamically) */}
          <div className="flex justify-center">
            <ButtonWhite>View More Member</ButtonWhite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSection;
