import PageTitle from "../../../Components/PageTitle/PageTitle";
import useLoading from "../../../Utils/Hooks/useLoading";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import Services from "../Services/Services";

const ServicesPageLayout = () => {
  const { loading } = useLoading();

  return (
    <div>
      {!loading ? (
        <div>
          <PageTitle pageName={"Services"}>
            Crafting Digital Experiences That Deliver Real Impact
          </PageTitle>
          <Services />
          <TestimonialSection />
          <OurSupportSection />
          <ConsultationSection />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default ServicesPageLayout;
