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
import useLoading from "../../../Utils/Hooks/useLoading";
import img from "../../../assets/Logo/logo 1.png";

const HomePageLayOut = () => {
  const { loading } = useLoading();
  return (
    <div>
      {!loading ? (
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
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default HomePageLayOut;
