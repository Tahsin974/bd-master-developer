import PageTitle from "../../../Components/PageTitle/PageTitle";
import useLoading from "../../../Utils/Hooks/useLoading";
import ConsultationSection from "../../Shared/Consultation-Section/ConsultationSection";
import OurSupportSection from "../../Shared/OurSupport-Section/OurSupportSection";
import TestimonialSection from "../../Shared/Testimonial-Section/TestimonialSection";
import Projects from "../Projects/Projects";
import img from "../../../assets/Project-Page/under construction please GIF.gif";

const ProjectPageLayout = () => {
  // const { loading } = useLoading();
  return (
    <>
      <div className="hero bg-[#ffffff] text-[#1D2345] min-h-screen">
        <div className="hero-content text-center">
          <img src={img} alt={`${img}`} />
        </div>
      </div>
      {/* <div>
        {!loading ? (
          <div>
            <PageTitle pageName={"Projects"}>
              From Vision to Reality — Explore Our Work
            </PageTitle>
            <Projects />
            <TestimonialSection />
            <OurSupportSection />
            <ConsultationSection />
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        )}
      </div> */}
    </>
  );
};

export default ProjectPageLayout;
