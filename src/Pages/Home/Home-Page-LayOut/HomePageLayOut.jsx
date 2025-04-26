import AboutSection from "../About-Section/AboutSection";
import AccomplishmentSection from "../Accomplishment-Section/AccomplishmentSection";
import ArticlesSection from "../Articles-Section/ArticlesSection";
import BuildSection from "../Build-Section/BuildSection";
import HeroSection from "../Hero-Section/HeroSection";
import OurSupportSection from "../OurSupport-Section/OurSupportSection";
import ServiceSection from "../Service-Section/ServiceSection";
import TeamMemberSection from "../TeamMember-Section/TeamMemberSection";
import TechnologySection from "../Technology-Section/TechnologySection/TechnologySection";
import TestimonialSection from "../Testimonial-Section/TestimonialSection";

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
      <BuildSection />
    </div>
  );
};

export default HomePageLayOut;
