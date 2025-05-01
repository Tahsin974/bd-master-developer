// Import necessary icons and assets

import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import img from "../../../assets/Hero-Section/bd-master-working-office.jpg";
import "./HeroSection.css";
import { useState } from "react";
import YouTubeDialog from "./YouTubeDialog";

// Tech stack logos

import bootstrap from "../../../assets/Hero-Section/bootstrap-logo.png";
import tailwind from "../../../assets/Hero-Section/tailwind-css-logo.png";
import node from "../../../assets/Hero-Section/nodejs-logo.png";
import laravel from "../../../assets/Hero-Section/Laravel-Logo.png";
import react from "../../../assets/Hero-Section/react.png";
import vue from "../../../assets/Hero-Section/Vuejs-logo.png";
import ButtonBlue from "../../../Components/ButtonBlue/ButtonBlue";

const HeroSection = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      {/*
      ---------------------------------------------
      Hero Section with Gradient Background 
      --------------------------------------------
      */}
      <section className="relative hero bg-gradient-to-t from-[#B1F2F4CC] to-white  hero-section pt-36 pb-28">
        {/*
        ----------------------------------------------
        Hero Content Container 
        -----------------------------------------------
        */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 max-w-[1280px] mx-auto gap-y-16 items-center  justify-items-center xl:px-12 lg:px-12 md:px-12 px-6 gap-x-6">
          {/* 
          ----------------------------------------------
          Left Column: Text & Buttons 
          ----------------------------------------------
          */}
          <div className="space-y-2.5 text-[#1D2345] lg:text-left xl:text-left ">
            <h1 className="xl:text-5xl/normal lg:text-4xl/normal md:text-5xl/normal sm:text-5xl/normal text-4xl/normal    inter-bold">
              <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800 ">
                Empowering
              </span>{" "}
              Innovation Through <span className="text-blue-800">Code</span>
            </h1>
            <p className="py-6 text-lg ruluko-regular text-justify">
              At BD Master Developer, we specialize in turning bold ideas into
              reliable software. From startups to enterprises, our expert team
              delivers web, mobile, and cloud-based applications with precision
              and passion.
            </p>
            {/* 
            ------------------------------------------------
            Login/Registration (im using ButtonBlue Custom component) 
            ------------------------------------------------
            */}
            <div className="space-x-4 mb-14">
              <a href="https://api.whatsapp.com/send/?phone=%2B8801768789018">
                <ButtonBlue>
                  Book a Meeting <FaArrowRightLong />
                </ButtonBlue>
              </a>

              <button className="btn btn-green btn-sm md:btn-md lg:btn-lg xl:btn-lg text-[#1D2345]">
                Sign Up
              </button>
            </div>
            {/*
            -------------------------------------------
            Tech Logos with Animation 
            -------------------------------------------
            */}
            <div className="lg:w-11/12 xl:w-11/12 grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 grid-cols-3 items-center gap-4 gap-y-8 justify-items-center mt-6">
              <img src={bootstrap} alt="bootstrap" className="move-up w-10  " />
              <img src={tailwind} alt="tailwind" className="zoom w-16" />
              <img src={node} alt="node" className="move-up w-10" />
              <img src={laravel} alt="laravel" className="half-rotate w-10" />
              <img src={react} alt="react" className="rotate w-10" />
              <img src={vue} alt="vue" className="zoom w-10" />
            </div>
          </div>
          {/*
          ----------------------------------------------
          Right Column: Office Image with Play Button 
          ----------------------------------------------
          */}
          <div className="max-w-[90%]">
            <figure className="relative">
              <div className="relative  max-w-xl rounded-lg shadow-2xl">
                <img
                  src={img}
                  className="h-full w-full object-cover  rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="xl:size-24 lg:size-20 md:size-14 size-12  relative">
                    {/* 
                    -----------------------------------------
                    Animated Play Button Ping 
                    ------------------------------------------
                    */}
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 "></span>
                    {/*
                    
                    -----------------------------------------
                    Play Button 
                    -----------------------------------------
                    */}
                    <button
                      onClick={() => setOpen(true)}
                      className=" bg-red-700 border-red-700 btn btn-circle  xl:size-24 lg:size-20 md:size-14 size-12 absolute z-20 cursor-pointer"
                    >
                      <FaPlay className="text-white" size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* 
        ------------------------------------------------
        YouTube video Dialog/Modal Component 
        -------------------------------------------------
        */}
        <YouTubeDialog setOpen={setOpen} Open={Open} />
      </section>
    </>
  );
};

export default HeroSection;
