import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite";
import IconShowcase from "../../../Components/IconShowcase/IconShowcase";
import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import UiUxIcon from "../../../assets/Services-Section/ui-ux.png";
import WebIcon from "../../../assets/Services-Section/web-development.png";
import MarketingIcon from "../../../assets/Services-Section/digital-marketing.png";
import SEOIcon from "../../../assets/Services-Section/seo.png";
import VideoEditingIcon from "../../../assets/Services-Section/video-editing.png";
import GraphicDesignIcon from "../../../assets/Services-Section/graphic-design.png";

import "./Services.css";
import UiUx from "../../../assets/Services-Page/UI-UX/uiux-design.png";
import uiTools from "../../../assets/Services-Page/UI-UX/uiTools.svg";
import Web from "../../../assets/Services-Page/Web-Development/web-devepoment.png";
import webTools from "../../../assets/Services-Page/Web-Development/webtools.svg";
import Marketing from "../../../assets/Services-Page/Digital-Marketing/digital-marketing.png";
import marketingTools from "../../../assets/Services-Page/Digital-Marketing/marketingTools.svg";
import SEO from "../../../assets/Services-Page/SEO/seo.png";
import seoTools from "../../../assets/Services-Page/SEO/seoTools.svg";
import VideoEditing from "../../../assets/Services-Page/Video-Editing/video-editing.png";
import editingTools from "../../../assets/Services-Page/Video-Editing/editingTools.svg";
import GraphicDesign from "../../../assets/Services-Page/Graphic-Design/graphic-design.png";
import graphicTools from "../../../assets/Services-Page/Graphic-Design/graphicTools.svg";

import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="bg-[#F8FDFE] min-h-screen my-24 py-20">
      <div className="max-w-[1280px] mx-auto px-4 space-y-16">
        {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
        <SectionTitle heading={`Industry We Serve`} subheading={"Services"} />
        {/* 
        --------------------------------------------------
                            Services
        --------------------------------------------------
        */}
        <div className="grid xl:grid-cols-1 lg:grid-cols-1  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-2 space-y-12 ">
          {/*
        --------------------------------------------------
                    Web-Development Service Card
        --------------------------------------------------
        */}
          <div className="card h-full service-card lg:card-side gap-5 rounded-3xl p-4">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={Web} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={WebIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    Website Development
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    We create visually appealing and user-friendly websites that
                    offer flawless navigation, optimized performance.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Design & Prototyping</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Development</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Testing & QA</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Launch & Support</p>
                </div>
              </div>
              <div>
                <img src={webTools} />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          {/*
        --------------------------------------------------
                            Ui/Ux Service Card
        --------------------------------------------------
        */}
          <div className="card  h-full service-card lg:card-side gap-5 rounded-3xl p-4">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={UiUx} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={UiUxIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    UI-UX Design
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    When it comes to UI/UX design, we create experiences that
                    are simple to navigate.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>User Research</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Wireframe & Prototyping</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Visual Ul Design</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Usability Testing</p>
                </div>
              </div>
              <div>
                <img src={uiTools} alt="" />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>

          {/*
        --------------------------------------------------
                    Digital Marketing Service Card
        --------------------------------------------------
        */}
          <div className="card h-full service-card lg:card-side gap-5 rounded-3xl p-4">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={Marketing} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={MarketingIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    Digital Marketing
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    Promote your brand online through SEO, social media,
                    content, and paid advertising.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Research & Strategy</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Content Creation</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Channel Optimization</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Analytics & Improvement</p>
                </div>
              </div>
              <div>
                <img src={marketingTools} />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          {/*
        --------------------------------------------------
                    SEO Service Card
        --------------------------------------------------
        */}
          <div className="card h-full service-card lg:card-side gap-5 rounded-3xl p-4">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={SEO} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={SEOIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    SEO
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    Boost your online visibility and rank higher with expert SEO
                    strategies.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Keyword Research</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>On-Page Optimization</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Technical SEO</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Link Building & Monitoring</p>
                </div>
              </div>
              <div>
                <img src={seoTools} />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          {/*
        --------------------------------------------------
                    Video Editing Service Card
        --------------------------------------------------
        */}
          <div className="card h-full service-card lg:card-side gap-5 rounded-3xl p-4">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={VideoEditing} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={VideoEditingIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    Video Editing
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    Transform raw footage into stunning, professional-quality
                    videos that engage and inspire.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Footage Review</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Rough Cut</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Fine Editing</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Color Grading & Sound Design</p>
                </div>
              </div>
              <div>
                <img src={editingTools} />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
          {/*
        --------------------------------------------------
                    Graphic Design Service Card
        --------------------------------------------------
        */}
          <div className="card service-card lg:card-side gap-5 rounded-3xl p-4 h-full">
            <figure className="xl:w-1/2 lg:w-1/2">
              <img src={GraphicDesign} alt="Album" />
            </figure>
            <div className="card-body xl:w-1/2 lg:w-1/2">
              <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
                {/* Small Icon */}
                <IconShowcase icon={GraphicDesignIcon} />
                <div>
                  <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                    Graphics Design
                  </p>
                  <p className="text-gray-400 ruluko-regular text-lg">
                    Boost your online visibility and rank higher with expert SEO
                    strategies.
                  </p>
                </div>
              </div>
              <div className="ps-2.5">
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Footage Review</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Rough Cut</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Fine Editing</p>
                </div>
                <div className="font-semibold mt-3.5 flex gap-x-2 items-center">
                  <FaArrowRight size={20} />
                  <p>Color Grading & Sound Design</p>
                </div>
              </div>
              <div>
                <img src={graphicTools} />
              </div>
              <div className="card-actions justify-start mt-auto">
                <ButtonWhite>
                  <span className="btn-link">View Projects</span>
                </ButtonWhite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
