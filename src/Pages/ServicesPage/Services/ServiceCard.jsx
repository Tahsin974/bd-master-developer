import { FaArrowRight } from "react-icons/fa6";
import "./Services.css";
import ButtonWhite from "../../../Components/ButtonWhite/ButtonWhite";
import IconShowcase from "../../../Components/IconShowcase/IconShowcase";
import { HashLink } from "react-router-hash-link";
const ServiceCard = ({ service }) => {
  const { icon, serviceName, description, services, tools, thumbnail } =
    service;
  return (
    <div>
      <div className="card h-full service-card lg:card-side gap-5 rounded-3xl p-4">
        <figure className="xl:w-1/2 lg:w-1/2">
          <img src={thumbnail} alt="Album" />
        </figure>
        <div className="card-body xl:w-1/2 lg:w-1/2">
          <div className="flex flex-col xl:flex-row lg:flex-row  xl:items-center lg:items-center items-start gap-4">
            {/* Small Icon */}
            <IconShowcase icon={icon} />
            <div>
              <p className="text-xl font-semibold ruluko-bold text-[#1D2345]">
                {serviceName}
              </p>
              <p className="text-gray-400 ruluko-regular text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="ps-2.5">
            {services.map((service, index) => (
              <div
                key={index}
                className="font-semibold mt-3.5 flex gap-x-2 items-center"
              >
                <FaArrowRight size={20} />
                <p>{service}</p>
              </div>
            ))}
          </div>
          <div>
            <img src={tools} className="max-h-16" />
          </div>
          <div className="card-actions justify-start mt-auto">
            <HashLink to="/projects#">
              <ButtonWhite>
                <span className="btn-link">View Projects</span>
              </ButtonWhite>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
