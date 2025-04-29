import PageTitle from "../../../Components/PageTitle/PageTitle";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import Services from "../Services/Services";

const ServicesPageLayout = () => {
  return (
    <div>
      <PageTitle pageName={"Services"} />
      <Services />
      <TestimonialSection />
      <OurSupportSection />
      <ConsultationSection />
    </div>
  );
};

export default ServicesPageLayout;
