import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      {/* Navbar Component*/}
      <Navbar>
        {/* React Router Outlet */}
        <div>
          <Outlet />
        </div>
      </Navbar>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayOut;
