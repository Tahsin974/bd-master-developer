import { FaArrowRightLong } from "react-icons/fa6"; // Importing right-arrow icon from react-icons for button
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue"; // Custom ButtonBlue component
import diagram from "../../../assets/SupportSection/support.svg";

const OurSupportSection = () => {
  return (
    <div className=" bg-[#F8FDFE] text-[#1D2345] min-h-full">
      {/* Main container with background and text color */}

      <div className="hero-content flex-col xl:flex-row lg:flex-row max-w-[1280px] mx-auto lg:gap-x-[90px] lg:gap-y-0 xl:gap-x-[90px] xl:gap-y-0 gap-y-20 xl:px-12 lg:px-12 md:px-12 px-6 py-10 my-20">
        {/* Container for the content, with flex layout, responsive for large screens */}

        <img src={diagram} className="xl:w-1/2 lg:xl:w-1/2" />
        {/* Image for the right side, with rounded corners and a shadow effect */}

        <div className="xl:w-1/2 lg:xl:w-1/2">
          {/* Text content on the left side of the section */}
          <h5 className=" xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg font-semibold ruluko-bold text-[#00626F] uppercase">
            Our Support
          </h5>
          {/* Subtitle with custom styling */}

          <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug inter-bold font-bold">
            <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
              Customer Support
            </span>{" "}
            You Can Count On
          </h1>
          {/* Main Heading with gradient text */}

          <p className="py-6">
            Our experts are just a message away—24/7 assistance guaranteed. Get
            fast, friendly support whenever you need it. Bd Master Developer
            works in multiple sectors including website development, API
            development, Digital Marketing, UI/UX & SEO. Our dream is to
            continue your journey with success.
          </p>
          {/* Description of the support services */}

          <div className="mt-8">
            <ButtonBlue>
              Get Support <FaArrowRightLong />
            </ButtonBlue>
            {/* Call-to-action button with an arrow icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSupportSection;
