import employee from "../../../assets/Accomplishment-Section/employee.png";
import client from "../../../assets/Accomplishment-Section/client.png";
import country from "../../../assets/Accomplishment-Section/country.png";
import technology from "../../../assets/Accomplishment-Section/technology.png";
import reputation from "../../../assets/Accomplishment-Section/reputation.png";
import "./AccomplishmentSection.css";

const AccomplishmentSection = () => {
  return (
    <div>
      {/*
       ----------------------------------------------
      Accomplishment-Section Container 
       ----------------------------------------------
      */}
      <div className=" bg-[#F8FDFE] text-[#1D2345] my-24 ">
        <div className=" max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6">
          <div>
            {/*
       ----------------------------------------------
      Milestone  card accomplish-card grids
       ----------------------------------------------
      */}

            <div className="accomplish-cards ">
              {/*
              ----------------------------------------------
              Employees  card accomplish-card 
              ----------------------------------------------
              */}
              <div className=" card accomplish-card        transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center custom-shadow-inner mb-7">
                    <img src={employee} alt="" className="w-10 h-10" />
                  </div>

                  <h2 className=" font-extrabold text-4xl">35+</h2>

                  <h5 className="text-lg font-semibold">Employees</h5>
                </div>
              </div>

              {/*
              ----------------------------------------------
              Clients  card accomplish-card 
              ----------------------------------------------
              */}
              <div className=" card accomplish-card       transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl  custom-shadow-inner mb-7">
                    <img src={client} alt="" className="w-10 h-10" />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">3k+</h2>

                  <h5 className="text-lg font-semibold">Clients</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Countries  card accomplish-card 
              ----------------------------------------------
              */}
              <div className=" card accomplish-card       transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img src={country} alt="" className="w-10 h-10" />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">15+</h2>

                  <h5 className="text-lg font-semibold">Countries</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Technologies  card accomplish-card 
              ----------------------------------------------
              */}
              <div className=" card accomplish-card       transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img src={technology} alt="" className="w-10 h-10" />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">20+</h2>

                  <h5 className="text-lg font-semibold">Technologies</h5>
                </div>
              </div>
              {/*
              ----------------------------------------------
              Client Satisfaction  card accomplish-card 
              ----------------------------------------------
              */}
              <div className=" card accomplish-card       transition duration-300 ease-in-out hover:-translate-y-4  my-auto   px-3 py-7 ">
                <div className="items-center  text-center space-y-2">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#f9fafb] shadow-gray-400 rounded-xl custom-shadow-inner mb-7">
                    <img src={reputation} alt="" className="w-10 h-10" />
                  </div>

                  <h2 className=" font-extrabold text-4xl ">99.5%</h2>

                  <h5 className="text-lg font-semibold">Client Satisfaction</h5>
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
