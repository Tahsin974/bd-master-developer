import { FaArrowRightLong } from "react-icons/fa6";
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue";

const OurSupportSection = () => {
  return (
    <div className=" bg-[#F8FDFE] text-[#1D2345] min-h-full">
      <div className="hero-content flex-col xl:flex-row lg:flex-row max-w-[1280px] mx-auto lg:gap-x-[90px] lg:gap-y-0 xl:gap-x-[90px] xl:gap-y-0 gap-y-20 xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 py-10 my-20">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className=" rounded-lg shadow-2xl"
        />
        <div>
          <h5 className=" text-xl font-semibold ruluko-bold text-[#00626F]">
            Our Support
          </h5>
          <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-3xl/snug    inter-bold font-bold text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
            Customer Support You Can Count On
          </h1>
          <p className="py-6">
            Our experts are just a message away—24/7 assistance guaranteed. Get
            fast, friendly support whenever you need it. Bd Master Developer
            works in multiple Sector including website development, API
            Development, Digital Marketing, UI/UX & SEO. Our dream is to
            continue your journey with success.
          </p>
          <div className="mt-8">
            <ButtonBlue>
              Get Support <FaArrowRightLong />
            </ButtonBlue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSupportSection;
