import { FaArrowRightLong } from "react-icons/fa6"; // Importing an icon from React Icons
import "./ConsultationSection.css"; // Importing custom CSS for the ConsultationSection
import img from "../../../assets/Build-Section/work.svg"; // Importing image for the right side of the section
import logo1 from "../../../assets/Logo/logo 1.png"; // Importing logo for the left side
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue"; // Importing a custom blue button component

const ConsultationSection = () => {
  return (
    // Section container with background color, text color, and padding
    <section className="bg-[#E6F7FA] text-[#1D2345] my-20 max-w-[1280px] mx-auto rounded-4xl">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:gap-x-[90px] lg:gap-y-0 xl:gap-x-[90px] xl:gap-y-0 gap-y-20 items-center">
        {/* Left Content: Text and Button */}
        <div className="max-w-lg space-y-6 xl:ps-16 lg:ps-16 xl:px-0 lg:px-0 md:px-4 px-3 xl:pt-0 lg:pt-0 md:pt-6 pt-6">
          {/* Icon and Title */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center small-logo">
              <figure>
                <img src={logo1} alt="icon" className="w-7 h-7" />{" "}
                {/* Small Logo */}
              </figure>
            </div>
            <span className="text-xl font-semibold ruluko-bold text-[#00626F]">
              Ready to Get Started?
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Let's Build Something <br /> Great Together
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base">
            Whether you're starting from scratch or scaling up, our expert team
            is ready to turn your ideas into reality.
          </p>

          {/* Button */}
          <div className="mt-8">
            <ButtonBlue>
              Get a Free Consultation
              <FaArrowRightLong /> {/* Arrow icon next to the button text */}
            </ButtonBlue>
          </div>
        </div>

        {/* Right Image: Illustration or Graphic */}
        <div className="ms-auto">
          <img
            src={img}
            alt="Team illustration"
            className="xl:rounded-r-4xl lg:rounded-r-4xl rounded-br-4xl max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
