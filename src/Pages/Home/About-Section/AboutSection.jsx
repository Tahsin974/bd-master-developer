import { FaCheck } from "react-icons/fa6";
import img from "../../../assets/About-Section/about1.jpg";
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

      <div className="hero bg-[#F8FDFE] text-[#1D2345] my-24 min-h-screen">
        {/*
         ----------------------------------------------
        Content Wrapper - Flexbox for responsiveness 
         ----------------------------------------------
        */}

        <div className="hero-content flex-col xl:flex-row-reverse lg:flex-row-reverse max-w-[1280px] mx-auto lg:gap-x-14 lg:gap-y-0 xl:gap-x-14 xl:gap-y-0 gap-y-20 xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2">
          {/*
           ----------------------------------------------
          Left Column - Text Content 
           ----------------------------------------------
          */}

          <div className="lg:w-1/2 ">
            <h5 className="text-[#00626F] text-lg font-semibold">Who We Are</h5>
            {/* 
            ---------------------------------------------
            Main Heading 
            ----------------------------------------------
            */}

            <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-3xl/snug    inter-bold ">
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

            <p className="py-6 text-base ruluko-regular">
              BD Master Developer works across multiple domains including
              software development, dynamic website development, customized
              software solutions, and modern UI/UX design.
            </p>

            {/* reasons */}

            <div className="space-y-2 text-base font-semibold">
              <div className="flex items-center gap-4  ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck />
                </div>
                <p>Expert Developer</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck />
                </div>
                <p>Fast Communication</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6]  border-[#EDEEF6]">
                  <FaCheck />
                </div>
                <p>Unlimited Revision</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="p-2 custom-shadow rounded-full bg-[#EDEEF6] border-[#EDEEF6]">
                  <FaCheck />
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
              <ButtonBlue>Book a Meeting</ButtonBlue>
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
              className="rounded-3xl depth-rotate	 transition-all duration-700 ease-in-out
               "
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
