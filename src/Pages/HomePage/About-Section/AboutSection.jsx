import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import img from "../../../assets/About-Section/about1.jpeg";
import "./AboutSection.css";
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue";
const AboutSection = () => {
  return (
    <div>
      {/*
       ----------------------------------------------
      About Section Container 
       ----------------------------------------------
      */}

      <div className="hero bg-[#F8FDFE] text-[#1D2345]  xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10 min-h-screen">
        {/*
         ----------------------------------------------
        Content Wrapper - Flexbox for responsiveness 
         ----------------------------------------------
        */}

        <div className="hero-content flex-col xl:flex-row-reverse lg:flex-row-reverse max-w-[1280px] mx-auto lg:gap-x-14 lg:gap-y-0 xl:gap-x-14 xl:gap-y-0 gap-y-20 xl:px-12 lg:px-12 md:px-12 px-6">
          {/*
           ----------------------------------------------
          Left Column - Text Content 
           ----------------------------------------------
          */}

          <div className="lg:w-1/2 ">
            <h5 className="text-[#00626F] xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg ruluko-bold">
              Who We Are
            </h5>
            {/* 
            ---------------------------------------------
            Main Heading 
            ----------------------------------------------
            */}

            <h1 className="xl:text-4xl/snug lg:text-3xl/snug md:text-3xl/snug sm:text-3xl/snug text-2xl/snug    inter-bold lg:text-left xl:text-left ">
              Code From{" "}
              <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                Another Dimension to Automate
              </span>{" "}
              Your Entire World
            </h1>
            {/*
            ------------------------------------------
            Description Paragraph 
            ------------------------------------------
            */}

            <p className="py-6 text-base ruluko-regular lg:text-left xl:text-left text-justify">
              BD Master Developer works across multiple domains including
              software development, dynamic website development, customized
              software solutions, and modern UI/UX design.
            </p>

            {/* reasons */}

            <div className="space-y-2 text-base font-semibold">
              <div className="flex items-center gap-4  ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck className="text-[#00B2C9]" />
                </div>
                <p>Expert Developer</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck className="text-[#00B2C9]" />
                </div>
                <p>Fast Communication</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6]  border-[#EDEEF6]">
                  <FaCheck className="text-[#00B2C9]" />
                </div>
                <p>Unlimited Revision</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck className="text-[#00B2C9]" />
                </div>
                <p>24/7 Support</p>
              </div>
            </div>
            {/*
            --------------------------------------------
            Booking Button 
            -------------------------------------------
            */}

            <div className="mt-8">
              <a href="https://api.whatsapp.com/send/?phone=%2B8801768789018">
                <ButtonBlue>
                  Book a Meeting <FaArrowRightLong />
                </ButtonBlue>
              </a>
            </div>
          </div>
          {/* 
          -------------------------------------
          Right Column - Image 
          -------------------------------------
          */}

          <figure className="lg:w-1/2  rounded-2xl">
            <img
              src={img}
              className="rounded-3xl depth-rotate	 ease-in-out hover:grayscale 
               "
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
