import { SwiperSlide } from "swiper/react";
import MySlider from "../../../Components/MySlider/MySlider";
import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import img from "../../../assets/Articles-Section/image.png";
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite";
import "./ArticlesSection.css";
import { FaArrowRight } from "react-icons/fa";

const ArticlesSection = () => {
  const articles = [
    {
      tag: "Web Development",
      title: "The Ultimate Guide to Responsive Design",
      description:
        "Learn how to build websites that adapt to any screen size and provide a seamless user experience.\n" +
        "This comprehensive guide covers fluid layouts, flexible images, and media queries.\n" +
        "Master the techniques to create truly responsive websites.",
      image: img,
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
    {
      tag: "SEO",
      title: "Top 10 SEO Techniques to Rank Higher in 2025",
      description:
        "Stay ahead of the curve with the latest search engine optimization strategies.\n" +
        "Learn about keyword research, on-page optimization, link building, and technical SEO.\n" +
        "Implement these techniques to improve your website's visibility and attract more organic traffic.",
      image: img,
    },
    {
      tag: "Mobile App Development",
      title: "Building Your First React Native Application",
      description:
        "A step-by-step tutorial to get you started with cross-platform mobile development.\n" +
        "Set up your development environment, understand React Native components, and build a simple mobile app.\n" +
        "Leverage the power of JavaScript to create native-like mobile experiences for iOS and Android.",
      image: img,
    },
    {
      tag: "Data Science",
      title: "Introduction to Machine Learning Algorithms",
      description:
        "Explore the core concepts and applications of various machine learning techniques.\n" +
        "Get an overview of supervised and unsupervised learning, classification, regression, and clustering.\n" +
        "Understand how algorithms learn from data to make predictions and gain valuable insights.",
      image: img,
    },
    {
      tag: "Project Management",
      title: "Agile Methodologies: A Practical Overview",
      description:
        "Discover how agile principles can help you manage projects more efficiently and effectively.\n" +
        "Learn about Scrum, Kanban, sprints, and iterative development.\n" +
        "Improve team collaboration, adapt to changing requirements, and deliver value faster with agile approaches.",
      image: img,
    },
    {
      tag: "Content Writing",
      title: "Crafting Compelling Headlines That Drive Clicks",
      description:
        "Learn the art of writing attention-grabbing headlines for your articles and blog posts.\n" +
        "Explore different headline formulas, power words, and techniques to evoke curiosity.\n" +
        "Master the skill of writing irresistible headlines that increase engagement and traffic.",
      image: img,
    },
    {
      tag: "UX Design",
      title: "10 Principles in UI Design: Enhancing UX",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n" +
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n" +
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      image: img,
    },
  ];

  return (
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-10">
      <div className="max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 space-y-5">
        {/*
        -----------------------------------------------
                  Section Title 
        -----------------------------------------------
                  */}
        <SectionTitle
          heading={`You are Welcome to Explore our Awesome Blog`}
          subheading={"Our Articles"}
        />
        <div>
          <div>
            <MySlider
              view={3}
              mobileViewXs={1}
              mobileView={1}
              tabletView={2}
              laptopView={3}
              isPagination={false}
              buttonPrev={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[17%] lg:right-[17%] md:right-[22%] sm:right-[22%] right-[60%] -translate-y-1/2  z-10 btn-prev  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
              buttonNext={`absolute xl:-top-14 lg:-top-14 md:-top-14 sm:-top-14 top-5 xl:right-[10%] lg:right-[10%] md:right-[10%] sm:right-[10%] right-[30%]  -translate-y-1/2  z-10 btn-next  text-[#1D2345] cursor-pointer xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[60px] w-[40px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-lg xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[60px] h-[40px]`}
            >
              {articles.map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="card article-card custom-shadow max-w-[400px] h-[560px] p-4">
                    <figure>
                      <img src={article.image} className="h-[210px]" />
                    </figure>
                    <div className="card-body pl-6">
                      <div className="article-tag max-w-[200px] text-center px-3 py-1.5 me-auto">
                        <p className="ruluko-regular text-gray-500">
                          {article.tag}
                        </p>
                      </div>

                      <h2 className=" text-xl ruluko-bold ">{article.title}</h2>
                      <p className="text-lg ruluko-regular text-gray-500">
                        {article.description.split(" ").slice(0, 10).join(" ")}
                        ...
                      </p>
                      <div className="card-actions justify-start ">
                        <button className="btn bg-transparent border-transparent shadow-none text-[#1D2345] ruluko-bold btn-link items-center flex">
                          Read More
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </MySlider>
            <div className="flex justify-center">
              <ButtonWhite>View More Blog</ButtonWhite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
