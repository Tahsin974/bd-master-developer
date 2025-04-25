import AboutSection from "../About-Section/AboutSection";
import AccomplishmentSection from "../Accomplishment-Section/AccomplishmentSection";
import HeroSection from "../Hero-Section/HeroSection";
import ServiceSection from "../Service-Section/ServiceSection";
import TechnologySection from "../Technology-Section/TechnologySection";
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
    </div>
  );
};

export default HomePageLayOut;
