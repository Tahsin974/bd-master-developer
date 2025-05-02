import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import "./Services.css";

import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/services`);
      return res.data;
    },
  });
  console.log(services);
  return (
    <div className="bg-[#F8FDFE] min-h-screen xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
      {!isPending ? (
        <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
          {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
          <SectionTitle heading={`Industry We Serve`} subheading={"Services"} />
          {/* 
        --------------------------------------------------
                            Services
        --------------------------------------------------
        */}
          <div className="grid xl:grid-cols-1 lg:grid-cols-1  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-2 space-y-12 ">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default Services;
