import projects from "../../../assets/Project-Complete-Section/projects.png";
import products from "../../../assets/Project-Complete-Section/products.png";
import experts from "../../../assets/Project-Complete-Section/experts.png";
import countries from "../../../assets/Project-Complete-Section/countries.png";
import happyclient from "../../../assets/Project-Complete-Section/happy-client.png";
import experience from "../../../assets/Project-Complete-Section/experience.png";
const AccomplishmentSection = () => {
  return (
    <div>
      {/*
       ----------------------------------------------
      Accomplishment-Section Container 
       ----------------------------------------------
      */}
      <div className=" bg-[#F8FDFE] text-black my-24 ">
        <div className=" max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2">
          <div>
            {/*
       ----------------------------------------------
      Milestone card grids
       ----------------------------------------------
      */}

            <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center-safe ">
              {/*
              ----------------------------------------------
              Projects Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center custom-shadow-inner mb-7">
                    <img className="w-10 h-10" src={projects} />
                  </div>

                  <h2 className=" font-extrabold text-4xl">50+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Projects</h5>
                </div>
              </div>

              {/*
              ----------------------------------------------
              Products Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                    <img className="w-10 h-10" src={products} />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">40+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Products</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Experts Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img className="w-10 h-10" src={experts} />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">100+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Experts</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Countries Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img className="w-10 h-10 " src={countries} />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">100+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Countries</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Happy Clients Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img className="w-10 h-10" src={happyclient} />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">10K+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Happy Clients</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Experience Card 
              ----------------------------------------------
              */}
              <div className="card   w-[184px] h-[248px] custom-shadow transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img className="w-10 h-10 " src={experience} />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">3+</h2>
                  <div className="divider my-0" />
                  <h5 className="text-lg font-semibold">Years Experienced</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentSection;
