import PageTitle from "../../../Components/PageTitle/PageTitle";
import useLoading from "../../../Utils/Hooks/useLoading";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import Services from "../Services/Services";
import img from "../../../assets/Logo/logo 1.png";

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
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default ServicesPageLayout;
