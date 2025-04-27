import PageTitle from "../../../Components/PageTitle/PageTitle";
import BuildSection from "../../Shared/Build-Section/BuildSection";
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
      <BuildSection />
    </div>
  );
};

export default ProjectPageLayout;
