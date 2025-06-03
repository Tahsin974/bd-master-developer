import { SwiperSlide } from "swiper/react"; // Import SwiperSlide to use in the slider
import MySlider from "../../../Components/MySlider/MySlider"; // Import custom MySlider component
import SectionTitle from "../../../Components/Section-Title/SectionTitle"; // Import SectionTitle component
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite"; // Import ButtonWhite component
import "./ArticlesSection.css"; // Import CSS specific to this section
import { FaArrowRight } from "react-icons/fa"; // Import FaArrowRight icon for "Read More" button
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { HashLink } from "react-router-hash-link";

const ArticlesSection = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: blogs = [], isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs`);
      return Array.isArray(res.data) ? res.data : res.data.data || [];
    },
  });

  return (
    <>
      {!isPending ? (
        <div className="bg-[#F8FDFE] min-h-screen xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
          {/* Container for the articles section with padding and background color */}
          <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-5">
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
                buttonPrev={`absolute xl:-top-14 lg:-top-14 md:-top-14 top-5 xl:right-[17%] lg:right-[17%] md:right-[22%]  right-[60%] -translate-y-1/2 z-10 btn-prev text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Style for previous button
                buttonNext={`absolute xl:-top-14 lg:-top-14 md:-top-14  top-5 xl:right-[10%] lg:right-[10%] md:right-[10%]  right-[30%] -translate-y-1/2 z-10 btn-next text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`} // Style for next button
              >
                {/* Mapping through the articles and rendering each article as a SwiperSlide */}
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id}>
                    <div className="card article-card custom-shadow xl:h-[700px] lg:h-[700px] h-[650px] p-4">
                      <figure>
                        {/* Displaying article image */}
                        <img src={blog.image} className="" alt={blog.title} />
                      </figure>
                      <div className="card-body ">
                        {/* blog tag */}
                        <div className="article-tag w-[max-content] text-center px-3 py-1.5 ">
                          <p className="ruluko-regular text-gray-500">
                            {blog.tag}
                          </p>
                        </div>

                        {/* blog title */}
                        <h2 className="xl:text-xl text-base ruluko-bold">
                          {blog.title}
                        </h2>

                        {/* blog description */}
                        <p className="xl:text-lg test-sm ruluko-regular text-gray-500">
                          {blog.description.split(" ").slice(0, 10).join(" ")}
                          ...
                        </p>

                        {/* Read More button */}
                        <div className="card-actions justify-start ">
                          <HashLink to={`/blogs-details/${blog.slug}#`}>
                            <button className="btn bg-transparent border-transparent shadow-none text-[#1D2345] ruluko-bold btn-link items-center flex">
                              Read More
                              <FaArrowRight /> {/* Right arrow icon */}
                            </button>
                          </HashLink>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </MySlider>

              {/* View More Button at the bottom */}
              <div className="flex justify-center">
                <HashLink to="/blogs#">
                  <ButtonWhite>View More Blog</ButtonWhite>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </>
  );
};

export default ArticlesSection;
