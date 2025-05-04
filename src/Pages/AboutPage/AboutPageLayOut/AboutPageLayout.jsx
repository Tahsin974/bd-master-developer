import React from "react";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import ServiceSection from "../../HomePage/Service-Section/ServiceSection";
import TechnologySection from "../../HomePage/Technology-Section/TechnologySection/TechnologySection";
import AboutSection from "../../HomePage/About-Section/AboutSection";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import Mission from "../Mission/Mission";
import Vision from "../Vision/Vision";
import useLoading from "../../../Utils/Hooks/useLoading";
import OurTeam from "../OurTeam/OurTeam";
import img from "../../../assets/Logo/logo 1.png";

const AboutPageLayout = () => {
  const { loading } = useLoading();
  return (
    <div>
      {!loading ? (
        <div>
          <PageTitle pageName={"about"}>
            Driven by Passion, Focused on Innovation
          </PageTitle>
          <AboutSection />
          <ServiceSection />
          <TechnologySection />
          <OurTeam />
          <Mission />
          <Vision />
          <TestimonialSection />
          <ConsultationSection />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default AboutPageLayout;
