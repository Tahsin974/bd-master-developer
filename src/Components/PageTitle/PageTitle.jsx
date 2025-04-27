import { Link } from "react-router";

const PageTitle = ({ pageName }) => {
  return (
    <div>
      <div className="hero bg-gradient-to-t from-[#B1F2F4CC] to-white pt-36 pb-28">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <div className="max-w-[184px] border-4 border-[#F8FDFE] rounded-[45px] bg-[#838CC2] shadow-[0px_1px_7px_0px_rgba(0,0,0,0.12)] py-2 px-5 mx-auto text-[#F8FDFE] ruluko-regular capitalize">
              <Link to="/" className="text-gray-300">
                Home
              </Link>{" "}
              &gt; {pageName}
            </div>
            <h1 className="xl:text-5xl/normal lg:text-5xl/normal md:text-5xl/normal sm:text-5xl/normal text-4xl/normal    inter-bold">
              We turn great ideas into excellent project
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
