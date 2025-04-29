import { SwiperSlide } from "swiper/react"; // Import SwiperSlide to use in the slider
import MySlider from "../../../Components/MySlider/MySlider"; // Import custom MySlider component
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Import SectionTitle component
import img from "../../../assets/Articles-Section/image.png"; // Import a static image for article previews
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite"; // Import ButtonWhite component
import "./ArticlesSection.css"; // Import CSS specific to this section
import { FaArrowRight } from "react-icons/fa"; // Import FaArrowRight icon for "Read More" button

const ArticlesSection = () => {
  // Define an array of articles to display in the section
  const articles = [
    {
      tag: "Web Development",
      title: "The Ultimate Guide to Responsive Design",
      description:
        "Learn how to build websites that adapt to any screen size and provide a seamless user experience.\n" +
        "This comprehensive guide covers fluid layouts, flexible images, and media queries.\n" +
        "Master the techniques to create truly responsive websites.",
      image: img, // Use the imported image for each article
    },
    {
      tag: "Digital Marketing",
      title: "5 Key Strategies for Effective Social Media Marketing",
      description:
        "Boost your brand presence and engage your audience with these proven social media tactics.\n" +
        "Discover the power of content calendars, audience targeting, and insightful analytics.\n" +
        "Drive meaningful interactions and conversions through strategic social media efforts.",
      image: img,
    },
    {
      tag: "Graphic Design",
      title: "Mastering Color Theory for Stunning Visuals",
      description:
        "Understand the fundamentals of color and how to use it effectively in your design projects.\n" +
        "Explore the color wheel, harmony, contrast, and the psychological impact of different hues.\n" +
        "Create visually appealing and emotionally resonant designs with a solid understanding of color theory.",
      image: img,
    },
    // More articles can be added in a similar format...
  ];

  return (
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-10">
      {/* Container for the articles section with padding and background color */}
      <div className="max-w-[1280px] mx-auto px-4 space-y-5">
        {/* Section Title */}
        <SectionTitle
          heading={
            <>
              You are Welcome to{" "}
              <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                Explore
              </span>{" "}
              our Awesome Blog
            </>
          }
          subheading={"Our Articles"}
        />
        <div>
          {/* Slider for displaying articles */}
          <MySlider
            view={3} // Number of items to view at once on desktop
            mobileViewXs={1} // Number of items to view on small screens (extra small devices)
            mobileView={1} // Number of items to view on mobile
            tabletView={2} // Number of items to view on tablet-sized screens
            laptopView={3} // Number of items to view on laptops/desktops
            isPagination={false} // Disable pagination controls
            buttonPrev={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[17%] lg:right-[17%] md:right-[22%] sm:right-[22%] right-[60%] -translate-y-1/2 z-10 btn-prev text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Style for previous button
            buttonNext={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[10%] lg:right-[10%] md:right-[10%] sm:right-[10%] right-[30%] -translate-y-1/2 z-10 btn-next text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Style for next button
          >
            {/* Mapping through the articles and rendering each article as a SwiperSlide */}
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="card article-card custom-shadow max-w-[400px] h-[560px] p-4">
                  <figure>
                    {/* Displaying article image */}
                    <img
                      src={article.image}
                      className="h-[210px]"
                      alt={article.title}
                    />
                  </figure>
                  <div className="card-body pl-6">
                    {/* Article tag */}
                    <div className="article-tag w-[max-content] text-center px-3 py-1.5 ">
                      <p className="ruluko-regular text-gray-500">
                        {article.tag}
                      </p>
                    </div>

                    {/* Article title */}
                    <h2 className="text-xl ruluko-bold">{article.title}</h2>

                    {/* Article description */}
                    <p className="text-lg ruluko-regular text-gray-500">
                      {article.description.split(" ").slice(0, 10).join(" ")}...
                    </p>

                    {/* Read More button */}
                    <div className="card-actions justify-start ">
                      <button className="btn bg-transparent border-transparent shadow-none text-[#1D2345] ruluko-bold btn-link items-center flex">
                        Read More
                        <FaArrowRight /> {/* Right arrow icon */}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </MySlider>

          {/* View More Button at the bottom */}
          <div className="flex justify-center">
            <ButtonWhite>View More Blog</ButtonWhite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
