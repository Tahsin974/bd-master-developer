import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Utils/AxiosPublic/UseAxiosPublic";
import MemberCard from "./MemberCard";
import "./OurTeam.css";

const OurTeam = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: members = [], isPending } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/members`);
      return Array.isArray(res.data) ? res.data : res.data.data || [];
    },
  });
  return (
    <div
      id="team"
      className="bg-[#F8FDFE] min-h-screen xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10"
    >
      {!isPending ? (
        <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
          {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
          <div className="mx-auto w-[max-content] space-y-1.5">
            <h5 className=" xl:text-xl lg:text-xl md:text-xl sm:text-xl text-base font-semibold ruluko-bold text-[#00626F] uppercase text-center">
              CodexBond Team
            </h5>
            <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug inter-bold  capitalize">
              Experts Ready to Help
            </h1>
          </div>
          {/* 
        --------------------------------------------------
                            Services
        --------------------------------------------------
        */}
          <div className="member-cards px-2 space-y-12 ">
            {members.map((member) => (
              <MemberCard key={member._id} member={member} />
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

export default OurTeam;
