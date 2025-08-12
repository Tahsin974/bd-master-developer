import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/Logo/logo.png";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Navbar.css";
import useSelectedLinkContext from "../../../Context/useSelectedLinkContext";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router";
const Navbar = ({ children }) => {
  const { selectedLink } = useSelectedLinkContext();
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  // menu close handle function
  const drawerRef = useRef(null);
  const handleMenu = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  }, [location.pathname]);

  const navOptions = (
    <>
      <li>
        <HashLink
          to="/home#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            (selectedLink === "/home" && "selected-link") ||
            (selectedLink === "/" && "selected-link")
          }`}
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/about#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            selectedLink === "/about" && "selected-link"
          }`}
        >
          About Us
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/services#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            selectedLink === "/services" && "selected-link"
          }`}
        >
          Services
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/blogs#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            selectedLink === "/blogs" && "selected-link"
          }`}
        >
          Blogs
        </HashLink>
      </li>
      {/* <li>
        <HashLink
          to="/projects#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            selectedLink === "/projects" && "selected-link"
          }`}
        >
          Projects
        </HashLink>
      </li> */}

      <li>
        <HashLink
          to="/contact#"
          className={` text-[#1D2345] text-lg bg-transparent  ${
            selectedLink === "/contact" && "selected-link"
          }`}
        >
          Contact Us
        </HashLink>
      </li>
    </>
  );

  useEffect(() => {
    // Function to check if the window has been scrolled more than 20px

    const handleScroll = () => {
      setScrolling(window.scrollY > 15);
    };
    // Add scroll event listener when the component mounts

    window.addEventListener("scroll", handleScroll);
    // Cleanup: Remove event listener when the component unmounts

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="drawer">
        <input
          ref={drawerRef}
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`${
              scrolling ? "bg-white" : "bg-transparent"
            } fixed top-0 z-50 w-full shadow-sm transition-all duration-300`}
          >
            <div className="max-w-[1280px] mx-auto w-full  py-4 flex items-center justify-between xl:px-12 lg:px-12 md:px-12 px-6">
              {/* 
            Navbar start section with logo image
            Sets logo height to 40px and maintains aspect ratio

            */}
              <div className="navbar-start ">
                <HashLink to="/#">
                  <img
                    src={logo}
                    alt="CodexBond Logo"
                    className="h-[50px] w-auto "
                  />
                </HashLink>
              </div>
              {/* Navbar center section */}
              <div className="navbar-center">
                {/* Horizontal nav menu for large screens */}

                <ul className="menu menu-horizontal px-1 xl:ml-64 lg:ml-36 hidden lg:flex xl:flex space-x-2.5">
                  {/* Renders dynamic nav options from the 'navOptions' variable */}

                  {navOptions}
                </ul>
              </div>
              {/* Navbar end section */}
              <div className="navbar-end">
                {/* Appointment Button */}
                <a href="https://api.whatsapp.com/send/?phone=%2B8801330923495">
                  <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-[#4654A4] text-white border-[#4654A4] shadow-none hidden lg:flex xl:flex rounded-3xl">
                    Get Support
                  </button>
                </a>

                {/* Hamburger menu button for small screens */}

                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost hover:bg-white hover:text-[#1D2345] active:bg-white active:border-white active:text-[#1D2345] lg:hidden"
                >
                  <RxHamburgerMenu size={25} />
                </label>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>

        {/* Sidebar drawer for mobile navigation */}

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-white min-h-full w-80 p-4">
            <button
              onClick={handleMenu}
              className="btn bg-transparent border-transparent text-[#1D2345] btn-ghost ms-auto text-2xl font-bold cursor-pointer"
            >
              <IoCloseOutline />
            </button>
            {/* Sidebar content here */}

            {/* Renders dynamic nav options from the 'navOptions' variable */}
            {navOptions}
            {/* appointment button */}
            <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-[#4654A4] text-white border-[#4654A4] shadow-none rounded-3xl mt-2">
              Get Support
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
