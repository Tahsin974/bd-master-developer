import Marquee from "react-fast-marquee"; // Importing the Marquee component for scrolling effect
import img from "../../../assets/Testimonial-Section/Linda White.jpg"; // Importing the image used for profile picture (static for now)
import Rating from "react-rating"; // Importing the Rating component to display user ratings
import { FaRegStar, FaStar } from "react-icons/fa"; // Importing star icons from react-icons for rating
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Importing the reusable SectionTitle component

const TestimonialSection = () => {
  // Array holding the testimonial data
  const testimonials = [
    {
      author: {
        name: "Anastasia Krohn", // Author name
        handle: "@krohn", // Author social handle
        profileImageUrl: img, // Profile image for the author
      },
      quote:
        "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      rating: 5, // Added rating for the testimonial
    },
    {
      author: {
        name: "User Two",
        handle: "@user_two",
        profileImageUrl: img,
      },
      quote:
        "This product has completely changed the way I work! It's intuitive and incredibly efficient. Highly recommend!",
      rating: 5,
    },
    {
      author: {
        name: "Jane Doe",
        handle: "@janedoe_design",
        profileImageUrl: img,
      },
      quote:
        "Excellent service and the team was very responsive to my needs. I'm very happy with the results.",
      rating: 4,
    },
    {
      author: {
        name: "Tech Enthusiast",
        handle: "@tech_lover",
        profileImageUrl: img,
      },
      quote:
        "A solid and well-built product. It does exactly what it promises and the updates are frequent.",
      rating: 4,
    },
  ];

  return (
    <div>
      <div className="bg-[#F8FDFE] min-h-screen my-24 py-20">
        <div className="max-w-[1280px] mx-auto px-4 space-y-16">
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
              Bd Master Developer works in multiple sectors including website
              development, API development, Digital Marketing, UI/UX & SEO. Our
              dream is to continue your journey with success.
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
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="card max-w-96 custom-shadow-inner mr-7 p-2"
                    >
                      <div className="card-body">
                        {/* Card Header with Author's Info */}
                        <div className="flex items-center space-x-2.5">
                          <div className="avatar">
                            <div className="w-[54px] rounded-full">
                              <img
                                src={testimonial.author.profileImageUrl}
                                alt={`${testimonial.author.name}'s profile`}
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="ruluko-regular text-[18px]">
                              {testimonial.author.name}
                            </h4>
                            <p className="ruluko-regular text-sm">
                              {testimonial.author.handle}
                            </p>
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="ruluko-regular">{testimonial.quote}</p>

                        {/* Rating Component */}
                        <div>
                          <Rating
                            emptySymbol={
                              <FaRegStar className="text-yellow-500 text-lg" />
                            }
                            fullSymbol={
                              <FaStar className="text-yellow-500 text-lg" />
                            }
                            initialRating={testimonial.rating}
                            readonly // Make the rating component readonly
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="my-7">
              {/* Right Marquee Component */}
              <Marquee direction="right">
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="card max-w-96 custom-shadow-inner mr-7 p-2"
                    >
                      <div className="card-body">
                        {/* Card Header */}
                        <div className="flex items-center space-x-2.5">
                          <div className="avatar">
                            <div className="w-[54px] rounded-full">
                              <img
                                src={testimonial.author.profileImageUrl}
                                alt={`${testimonial.author.name}'s profile`}
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="ruluko-regular text-[18px]">
                              {testimonial.author.name}
                            </h4>
                            <p className="ruluko-regular text-sm">
                              {testimonial.author.handle}
                            </p>
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="ruluko-regular">{testimonial.quote}</p>

                        {/* Rating */}
                        <div>
                          <Rating
                            emptySymbol={
                              <FaRegStar className="text-yellow-500 text-lg" />
                            }
                            fullSymbol={
                              <FaStar className="text-yellow-500 text-lg" />
                            }
                            initialRating={testimonial.rating}
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
