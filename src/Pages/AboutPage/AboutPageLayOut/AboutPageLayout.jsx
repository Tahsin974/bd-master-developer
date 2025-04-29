import React from "react";
import TeamMemberSection from "../../HomePage/TeamMember-Section/TeamMemberSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import ServiceSection from "../../HomePage/Service-Section/ServiceSection";
import TechnologySection from "../../HomePage/Technology-Section/TechnologySection/TechnologySection";
import AboutSection from "../../HomePage/About-Section/AboutSection";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import Mission from "../Mission/Mission";
import Vision from "../Vision/Vision";

const AboutPageLayout = () => {
  return (
    <div>
      <PageTitle pageName={"about"} />
      <AboutSection />
      <Mission />
      <Vision />
      <TeamMemberSection />
      <TestimonialSection />
      <ServiceSection />
      <TechnologySection />
      <ConsultationSection />
    </div>
  );
};

export default AboutPageLayout;
