import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/Logo/logo.png";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = ({ children }) => {
  const [scrolling, setScrolling] = useState(false);
  // menu close handle function
  const drawerRef = useRef(null);
  const handleMenu = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  const navOptions = (
    <>
      <li>
        <Link className="font-semibold text-black text-lg">Home</Link>
      </li>
      <li>
        <Link className="font-semibold text-black text-lg">Service</Link>
      </li>
      <li>
        <Link className="font-semibold text-black text-lg">About</Link>
      </li>
      <li>
        <Link className="font-semibold text-black text-lg">Contact Us</Link>
      </li>
    </>
  );
  useEffect(() => {
    // Function to check if the window has been scrolled more than 20px

    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
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
            className={`navbar fixed top-0 z-50 transition-all duration-300 ${
              scrolling
                ? "bg-white shadow-sm lg:px-32 xl:lg:px-32 "
                : "bg-transparent shadow-sm lg:px-32 xl:lg:px-32"
            }`}
          >
            {/* 
            Navbar start section with logo image
            Sets logo height to 40px and maintains aspect ratio

            */}
            <div className="navbar-start ">
              <img
                src={logo}
                alt="BD Master Developer Logo"
                className="h-[40px] w-auto "
              />
            </div>
            {/* Navbar end section */}
            <div className="navbar-end">
              {/* Horizontal nav menu for large screens */}

              <ul className="menu menu-horizontal px-1 hidden lg:flex xl:flex space-x-2.5">
                {/* Renders dynamic nav options from the 'navOptions' variable */}

                {navOptions}
              </ul>

              {/* Appointment Button */}
              <button className="btn bg-blue-800 text-white border-blue-800 shadow-none hidden lg:flex xl:flex rounded-lg">
                Appointment
              </button>

              {/* Hamburger menu button for small screens */}

              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost hover:bg-white hover:text-black lg:hidden"
              >
                <RxHamburgerMenu size={25} />
              </label>
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
              className="btn bg-transparent border-transparent text-black btn-ghost ms-auto text-2xl font-bold cursor-pointer"
            >
              <IoCloseOutline />
            </button>
            {/* Sidebar content here */}

            {/* Renders dynamic nav options from the 'navOptions' variable */}
            {navOptions}
            {/* appointment button */}
            <button className="btn bg-blue-800 text-white border-blue-800 shadow-none rounded-lg">
              Appointment
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
