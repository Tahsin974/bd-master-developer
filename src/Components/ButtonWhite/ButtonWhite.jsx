import React from "react";
import "./ButtonWhite.css";
import { FaArrowRightLong } from "react-icons/fa6";
const ButtonWhite = ({ children, isButtonBlock = false }) => {
  return (
    <button
      className={`btn btn-sm md:btn-md lg:btn-lg xl:btn-lg text-[#4654A4]   button-white-custom ruluko-bold ${
        isButtonBlock && "btn-block"
      }`}
    >
      {children}
      <FaArrowRightLong />
    </button>
  );
};

export default ButtonWhite;
