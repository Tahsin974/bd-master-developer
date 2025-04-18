import projects from "../../../assets/Project-Complete-Section/projects.png";
import products from "../../../assets/Project-Complete-Section/products.png";
import experts from "../../../assets/Project-Complete-Section/experts.png";
import countries from "../../../assets/Project-Complete-Section/countries.png";
import happyclient from "../../../assets/Project-Complete-Section/happy-client.png";
import experience from "../../../assets/Project-Complete-Section/experience.png";
const ProjectCompleteSection = () => {
  return (
    <div>
      {/*
       ----------------------------------------------
      Project-Complete Section Container 
       ----------------------------------------------
      */}
      <div className="hero bg-blue-100 text-black  min-h-screen">
        <div className="hero-content  max-w-[1140px] mx-auto">
          <div className="space-y-12">
            {/*
       ----------------------------------------------
     Section Header 
       ----------------------------------------------
      */}
            <div className="text-center">
              {/*
       ----------------------------------------------
      Subtitle 
       ----------------------------------------------
      */}
              <h5 className=" text-lg font-semibold ruluko-regular">
                BD Master Developer
              </h5>
              {/*
       ----------------------------------------------
      Main Title with Gradient Text
       ----------------------------------------------
      */}
              <h1 className="xl:text-5xl/snug lg:text-5xl/snug md:text-5xl/snug sm:text-5xl/snug text-4xl/snug    yatra-one-regular font-bold text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                Milestones That Matter
              </h1>
            </div>
            {/*
       ----------------------------------------------
      Milestone card grids
       ----------------------------------------------
      */}

            <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2">
              {/*
              ----------------------------------------------
              Projects Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={projects} />

                  <h2 className=" font-bold text-4xl ">50+</h2>
                  <h5 className="text-xl ">Projects</h5>
                </div>
              </div>

              {/*
              ----------------------------------------------
              Products Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={products} />

                  <h2 className=" font-bold text-4xl ">40+</h2>
                  <h5 className="text-xl ">Products</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Experts Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={experts} />

                  <h2 className=" font-bold text-4xl ">100+</h2>
                  <h5 className="text-xl ">Experts</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Countries Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={countries} />

                  <h2 className=" font-bold text-4xl ">100+</h2>
                  <h5 className="text-xl ">Countries</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Happy Clients Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4 ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={happyclient} />

                  <h2 className=" font-bold text-4xl ">10K+</h2>
                  <h5 className="text-xl ">Happy Clients</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Experience Card 
              ----------------------------------------------
              */}
              <div className="card  bg-[#f6f8fc] card-lg shadow-xl hover:shadow-2xl rounded-xl border border-gray-100 transition duration-300 ease-in-out hover:-translate-y-4  ">
                <div className="px-2 py-3 items-center  text-center space-y-2">
                  <img className="w-20 mx-auto" src={experience} />

                  <h2 className=" font-bold text-4xl ">3+</h2>
                  <h5 className="text-xl ">Years Experienced</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompleteSection;
