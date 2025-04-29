import PageTitle from "../../../Components/PageTitle/PageTitle";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import Projects from "../Projects/Projects";

const ProjectPageLayout = () => {
  return (
    <div>
      <PageTitle pageName={"Projects"} />
      <Projects />
      <TestimonialSection />
      <OurSupportSection />
      <ConsultationSection />
    </div>
  );
};

export default ProjectPageLayout;
