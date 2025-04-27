import { SwiperSlide } from "swiper/react";
import MySlider from "../../../Components/MySlider/MySlider";
import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import img from "../../../assets/TeamMembers-Section/expert1.png";
import "./TeamMemberSection.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobe, FaLinkedin } from "react-icons/fa6";
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite";

const TeamMemberSection = () => {
  const teamMembers = [
    {
      name: "Md.Rubel Islam",
      title: "Full Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Siyam Mollah",
      title: "WordPress Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Tahsin Islam",
      title: "MERN Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },

    {
      name: "Abu Fahin",
      title: "UX-UI Designer",
      facebookUrl: "YOUR_FACEBOOK_URL_ABU", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_ABU", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_ABU", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Siyam Mollah",
      title: "WordPress Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Tahsin Islam",
      title: "MERN Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },

    {
      name: "Abu Fahin",
      title: "UX-UI Designer",
      facebookUrl: "YOUR_FACEBOOK_URL_ABU", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_ABU", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_ABU", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Siyam Mollah",
      title: "WordPress Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
    {
      name: "Tahsin Islam",
      title: "MERN Stack Web Developer",
      facebookUrl: "YOUR_FACEBOOK_URL_JANE", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_JANE", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_JANE", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },

    {
      name: "Abu Fahin",
      title: "UX-UI Designer",
      facebookUrl: "YOUR_FACEBOOK_URL_ABU", // Replace with actual URL
      linkedinUrl: "YOUR_LINKEDIN_URL_ABU", // Replace with actual URL
      websiteUrl: "YOUR_WEBSITE_URL_ABU", // Replace with actual URL
      profileImage: img, // Replace with actual URL
    },
  ];

  console.log(teamMembers);
  return (
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-10">
      <div className="max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 space-y-5">
        {/*
        -----------------------------------------------
                  Section Title 
        -----------------------------------------------
                  */}
        <SectionTitle
          heading={"Our Dedicated Team"}
          subheading={"Team Member"}
        />
        <div>
          <div>
            <MySlider
              view={5}
              mobileViewXs={1}
              isPagination={false}
              buttonPrev={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[17%] lg:right-[17%] md:right-[22%] sm:right-[22%] right-[60%] -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
              buttonNext={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[10%] lg:right-[10%] md:right-[10%] sm:right-[10%] right-[30%]  -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="card custom-shadow  xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[300px] h-[300px] ">
                    <figure className="relative card-animation">
                      <img
                        src={member.profileImage}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                      <div className=" absolute   top-0 h-full w-full social-links flex justify-evenly items-center">
                        <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                          <FaFacebookSquare
                            className="text-[#1D2345]"
                            size={20}
                          />
                        </button>
                        <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                          <FaLinkedin className="text-[#1D2345]" size={20} />
                        </button>
                        <button className="btn btn-circle bg-[#F8FDFE] border-[#F8FDFE]">
                          <FaGlobe className="text-[#1D2345]" size={20} />
                        </button>
                      </div>
                    </figure>
                    <div className="card-body p-2 items-center text-center">
                      <h2 className="card-title">{member.name}</h2>
                      <p className="text-gray-500">{member.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </MySlider>
            <div className="flex justify-center">
              <ButtonWhite>View More Member</ButtonWhite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSection;
