import logo from "../../../assets/Logo/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="lg:flex xl:flex   gap-10 lg:space-y-0 space-y-6  bg-[#0F172A] text-white p-10 lg:px-32 xl:lg:px-32">
        <aside className="xl:w-1/3 lg:w-1/3 space-y-2.5">
          <img
            src={logo}
            alt="BD Master Developer Logo"
            className="w-[100px] md:w-[140px]  h-auto"
          />
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">
              BD Master Developer
            </span>
            <br />
            We turn ideas into digital experiences — with clean code, creative
            thinking, and pixel-perfect design.
          </p>
        </aside>
        {/*
        ---------------------------------------------
        Address 
        ---------------------------------------------
        */}
        <div className="xl:w-1/3 lg:w-1/3  space-y-4">
          <div className="border-b border-gray-400 w-full pb-3.5">
            <h4 className="font-semibold text-lg ">Address</h4>
          </div>
          <div className="text-sm text-gray-300 space-y-6">
            <div>
              <h4 className="text-gray-400 font-semibold text-lg mb-1">
                Office
              </h4>
              <p>
                B-25, Mannan Plaza, 4th Floor
                <br />
                Khilkhet, Dhaka-1229, Bangladesh
              </p>
            </div>

            <div>
              <h4 className="text-gray-400 font-semibold text-lg mb-1">
                Email
              </h4>
              <p>
                <a
                  href="mailto:business@bdtask.com"
                  className="hover:underline"
                >
                  business@bdtask.com
                </a>
                <br />
                <a href="mailto:info@bdtask.com" className="hover:underline">
                  info@bdtask.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*
        -------------------------------------------
         phone 
         ---------------------------------------*/}
        <div className="xl:w-1/3 lg:w-1/3  space-y-4">
          <div className="border-b  border-gray-400 w-full pb-3.5">
            <h4 className="font-semibold text-lg ">Phone</h4>
          </div>
          <div className="text-sm text-gray-300 space-y-6">
            <div>
              <h4 className="text-gray-400 font-semibold text-lg mb-1">
                Service:
              </h4>
              <p>
                +880-176-878-9018
                <br />
                +880-172-138-3549
                <br />
                +880-179-598-1096
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*
      ------------------------------------------
      copyright 
      ------------------------------------------*/}
      <footer className="footer sm:footer-horizontal footer-center bg-[#0F172A] text-white p-4 border-t border-gray-700">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by BD
            Master Developer
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
