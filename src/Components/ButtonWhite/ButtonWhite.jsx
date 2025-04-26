import React from "react";
import "./ButtonWhite.css";
import { FaArrowRightLong } from "react-icons/fa6";
const ButtonWhite = ({ children }) => {
  return (
    <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg text-[#1D2345]   button-white-custom ruluko-bold">
      {children}
      <FaArrowRightLong />
    </button>
  );
};

export default ButtonWhite;
