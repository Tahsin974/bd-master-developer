import React from "react";
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue";
import { FaArrowRightLong } from "react-icons/fa6";
import "./BuildSection.css";
import img from "../../../assets/Build-Section/work.svg";
import logo1 from "../../../assets/Logo/logo 1.png";

const BuildSection = () => {
  return (
    <section className="bg-[#E6F7FA] text-[#1D2345]  my-20 max-w-[1280px] mx-auto rounded-4xl">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:gap-x-[90px] lg:gap-y-0 xl:gap-x-[90px] xl:gap-y-0 gap-y-20  items-center xl:px-0 lg:px-0 md:px-4 px-3 ">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 xl:ps-16 lg:ps-16 ">
          <div className="flex items-center gap-2">
            {/* Small Icon */}
            <div className=" flex items-center justify-center small-logo">
              <figure>
                <img src={logo1} alt="icon" className="w-7 h-7" />
              </figure>
            </div>

            <span className="text-xl font-semibold ruluko-bold text-[#00626F]">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Let's Build Something <br /> Great Together
          </h2>

          <p className="text-gray-600 text-base">
            Whether you're starting from scratch or scaling up, our expert team
            is ready to turn your ideas into reality.
          </p>

          <div className="mt-8">
            <ButtonBlue>
              Get a Free Consultation
              <FaArrowRightLong />
            </ButtonBlue>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src={img}
            alt="Team illustration"
            className="xl:rounded-r-4xl lg:rounded-r-4xl max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
