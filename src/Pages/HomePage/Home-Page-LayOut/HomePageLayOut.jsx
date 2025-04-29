import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import AboutSection from "../About-Section/AboutSection";
import AccomplishmentSection from "../Accomplishment-Section/AccomplishmentSection";
import ArticlesSection from "../Articles-Section/ArticlesSection";
import HeroSection from "../Hero-Section/HeroSection";
import ServiceSection from "../Service-Section/ServiceSection";
import TeamMemberSection from "../TeamMember-Section/TeamMemberSection";
import TechnologySection from "../Technology-Section/TechnologySection/TechnologySection";

const HomePageLayOut = () => {
  return (
    <div>
      <HeroSection />
      <AccomplishmentSection />
      <AboutSection />
      <ServiceSection />
      <TechnologySection />
      <TestimonialSection />
      <TeamMemberSection />
      <ArticlesSection />
      <OurSupportSection />
      <ConsultationSection />
    </div>
  );
};

export default HomePageLayOut;
