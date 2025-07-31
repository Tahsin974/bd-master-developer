import logo from "../../../assets/Logo/white-logo.png";
import "./Footer.css";
import { MdPhoneAndroid } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import facebook from "../../../assets/Footer/facebook.png";
import linkedin from "../../../assets/Footer/linkedin.png";
import instagram from "../../../assets/Footer/instagram.png";
import { FaRegCheckCircle } from "react-icons/fa";
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
              alt="CodexBond Logo"
              className="w-[300px] md:w-[200px]  h-auto"
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
              <a href="https://api.whatsapp.com/send/?phone=%2B8801768789018">
                <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg text-white booking-button  bg-[#004B54] ruluko-bold">
                  Book a Meeting
                </button>
              </a>

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
          <ul>
            <h6 className="inter-bold text-lg mb-1.5">Services</h6>
            <li className="text-gray-400">Web Development</li>
            <li className="text-gray-400">Graphics Design</li>
            <li className="text-gray-400">Digital Marketing</li>
            <li className="text-gray-400">Video Editing</li>
            <li className="text-gray-400">UI/UX Design</li>
          </ul>
          <nav>
            <h6 className="inter-bold text-lg mb-1.5">Quick Links</h6>
            <ul>
              <li>
                <a href="/about#team" className="link link-hover text-gray-400">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/services" className="link link-hover text-gray-400">
                  Order policy
                </a>
              </li>
              <li>
                <a href="/blogs#" className="link link-hover text-gray-400">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="/about#" className="link link-hover text-gray-400">
                  About Us
                </a>
              </li>
            </ul>
          </nav>

          <ul>
            <h6 className="inter-bold text-lg mb-1.5">Supports</h6>
            <li className="text-gray-400">Quick Fixes</li>
            <li className="text-gray-400">Personalized Project Guidance</li>
            <li className="text-gray-400">Fast Delivery Your Project</li>
            <li className="text-gray-400">Dedicated Client Support</li>
          </ul>
          <div>
            <h6 className="inter-bold text-lg mb-1.5">Contract</h6>
            <div className="space-y-2.5 grid grid-cols-1 items-center">
              <div className="flex items-start gap-3">
                <IoLocationSharp size={25} className="font-extrabold w-2/12" />
                <p className="w-10/12">
                  House-15,Road-07,Kalshi, Mipur-11,Dhaka-1216
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhoneAndroid size={25} className="font-extrabold w-2/12" />
                <p className="w-10/12">
                  +880-176-878-9018
                  <br />
                  +880-172-138-3549
                  <br />
                  +880-179-598-1096
                </p>
              </div>
              <div className="flex items-center gap-3">
                <SlEnvolope size={25} className="font-extrabold w-2/12" />
                <p className="w-10/12">codexbond@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/*
      
      copyright/bottom Part 
      ------------------------------------------*/}
        <footer className="flex xl:flex-row lg:flex-row flex-col-reverse  bg-transparent justify-between text-white p-4 border-t border-gray-700 gap-3.5">
          <div className="xl:w-2/3 lg:w-2/3">
            <p className="text-sm xl:text-left lg:text-left text-center">
              Copyright © {new Date().getFullYear()} - All right reserved by
              CodexBond
            </p>
          </div>
          <div className="flex gap-4 w-[max-context] xl:ms-auto lg:ms-auto mx-auto ">
            <a>
              <img src={facebook} alt="facebook logo" className="h-6 w-6" />
            </a>
            <a>
              <img src={linkedin} alt="facebook logo" className="h-6 w-6" />
            </a>
            <a>
              <img src={instagram} alt="facebook logo" className="h-6 w-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
