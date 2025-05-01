import Marquee from "react-fast-marquee"; // Importing the Marquee component for scrolling effect
import Rating from "react-rating"; // Importing the Rating component to display user ratings
import { FaRegStar, FaStar } from "react-icons/fa"; // Importing star icons from react-icons for rating
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Importing the reusable SectionTitle component
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: testimonials = [], isPending } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testimonials`);
      return res.data;
    },
  });
  console.log(testimonials);
  return (
    <div>
      {!isPending ? (
        <div className="bg-[#F8FDFE] min-h-screen my-24 py-20">
          <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
            {/* -----------------------------------------------
            Section Title 
          ----------------------------------------------- */}
            <SectionTitle
              heading={
                <>
                  See How{" "}
                  <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                    BD-Master
                  </span>{" "}
                  Transforms Investing
                </>
              }
              subheading={"Testimonial"}
            >
              <p className="ruluko-regular font-semibold text-gray-500">
                Our work speaks through the words of our clients. At{" "}
                <strong>Bd Master Developer</strong>, we believe in building
                long-term partnerships that deliver real results across web,
                API, design, and marketing.
              </p>
            </SectionTitle>

            <div className="relative">
              {/* Left Blur Effect */}
              <div className="absolute top-0 left-0 h-full xl:w-24 lg:w-24 md:w-24 w-12 bg-gradient-to-l from-transparent to-[#F8FDFE] z-10"></div>
              {/* Right Blur Effect */}
              <div className="absolute top-0 right-0 h-full xl:w-24 lg:w-24 md:w-24 w-12 bg-gradient-to-r from-transparent to-[#F8FDFE] z-10"></div>

              <div className="my-7">
                {/* Left Marquee Component */}
                <Marquee direction="left">
                  <div className="flex">
                    {/* Map through the testimonials array */}
                    {testimonials.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial._id}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </Marquee>
              </div>

              <div className="my-7">
                {/* Right Marquee Component */}
                <Marquee direction="right">
                  <div className="flex">
                    {testimonials.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial._id}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
