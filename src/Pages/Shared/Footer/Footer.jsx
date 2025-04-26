import { Link } from "react-router";
import logo from "../../../assets/Logo/white-logo.png";
import "./Footer.css";
import { MdPhoneAndroid } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#000F11] text-[#EBF1F5] ruluko-regular">
      <div className="max-w-[1280px] mx-auto">
        {/* 
        ------------------------------------------
        Top Part 
        ------------------------------------------
        */}
        <div className="lg:flex xl:flex items-start justify-between  gap-10 lg:space-y-0 space-y-6  bg-transparent text-white p-10 ">
          <div className="xl:w-1/3 lg:w-1/3 space-y-2.5">
            <img
              src={logo}
              alt="BD Master Developer Logo"
              className="w-[297px] md:w-[200px]  h-auto"
            />
            <p className="text-sm  ">
              Connecting clients with the best freelancers.
            </p>
          </div>
          <div className="flex xl:flex-row lg:flex-row flex-col bg-[#001E22] rounded-[28px] px-10 py-9 gap-5 xl:max-h-[200px] lg:max-h-[200px] max-w-[642px]">
            <div className="xl:w-3/5 lg:w-3/5">
              <h2 className="card-title inter-bold">Get started for free</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
            </div>
            <div className="xl:w-2/5 lg:w-2/5">
              <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg text-white booking-button  bg-[#004B54] ruluko-bold">
                Book a Meeting
              </button>
              <div className="font-light mt-6 flex gap-2 items-center">
                <FaRegCheckCircle size={20} />
                <p>No Credit Card Required</p>
              </div>
            </div>
          </div>
        </div>
        {/* 
        ------------------------------------------
        Center Part 
        ------------------------------------------
        */}

        {/*
          ---------------------------------------------                              Usefull links    --------------------------------------------- 
          */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5">
          <nav>
            <h6 className="inter-bold text-lg mb-1.5">Bd Master Developer</h6>
            <ul>
              <li>
                <Link className="link link-hover text-gray-400">About Us</Link>
              </li>
              <li>
                <Link className="link link-hover text-gray-400">Our Team</Link>
              </li>
              <li>
                <Link className="link link-hover text-gray-400">Services</Link>
              </li>
              <li>
                <Link className="link link-hover text-gray-400">Packages</Link>
              </li>
            </ul>
          </nav>
          <ul>
            <h6 className="inter-bold text-lg mb-1.5">Services</h6>
            <li className="text-gray-400">Web Development</li>
            <li className="text-gray-400">Graphics Design</li>
            <li className="text-gray-400">Digital Marketing</li>
            <li className="text-gray-400">Video Editing</li>
            <li className="text-gray-400">UI/UX Design</li>
          </ul>
          <ul>
            <h6 className="inter-bold text-lg mb-1.5">Supports</h6>
            <li className="text-gray-400">Lifetime Access</li>
            <li className="text-gray-400">24/7 Support From Mentor</li>
            <li className="text-gray-400">Fast Delivery Your Project</li>
            <li className="text-gray-400">Self Development</li>
          </ul>
          <div>
            <h6 className="inter-bold text-lg mb-1.5">Contract</h6>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <IoLocationSharp size={30} className="font-extrabold" />
                <p>House-15,Road-07,Kalshi, Mipur-11,Dhaka-1216</p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhoneAndroid size={25} className="font-extrabold" />
                <p>
                  +880-176-878-9018
                  <br />
                  +880-172-138-3549
                  <br />
                  +880-179-598-1096
                </p>
              </div>
              <div className="flex items-center gap-3">
                <SlEnvolope size={25} className="font-extrabold" />
                <p>bdmasterdeveloper@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/*
      
      copyright/bottom Part 
      ------------------------------------------*/}
        <footer className="flex xl:flex-row lg:flex-row flex-col-reverse  bg-transparent justify-between text-white p-4 border-t border-gray-700 gap-3.5">
          <div className="xl:w-2/3 lg:w-2/3">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} - All right reserved by BD
              Master Developer
            </p>
          </div>
          <div className="flex justify-between w-1/3 mx-auto ">
            <a>
              <FaFacebookSquare className="text-[#F8FDFE]" size={20} />
            </a>
            <a>
              <FaLinkedin className="text-[#F8FDFE]" size={20} />
            </a>
            <a>
              <FaInstagramSquare className="text-9xl[#F8FDFE]" size={20} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
