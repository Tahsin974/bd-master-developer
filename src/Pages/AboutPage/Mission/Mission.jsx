import mission from "../../../assets/AboutPage/mission.jpg";
const Mission = () => {
  return (
    <div>
      <div className="hero bg-[#F8FDFE] text-[#1D2345] h-[min-content] xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            src={mission}
            className=" rounded-lg shadow-2xl xl:w-1/2 lg:w-1/2 hover:grayscale "
          />
          <div className="xl:w-1/2 lg:w-1/2">
            <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug    inter-bold   capitalize">
              Our Mission
            </h1>
            <p className="py-6 text-justify ruluko-regular">
              At <strong>Bd Master Developer Agency</strong> , our mission is to
              empower businesses through innovative digital solutions that drive
              sustainable growth and measurable success. We specialize in web
              development, API integration, digital marketing, UI/UX design, and
              SEO—delivering custom-built, high-quality solutions tailored to
              meet each client's unique needs. Our focus is on building
              long-term partnerships, using the latest technologies to help
              clients thrive in an ever-evolving digital landscape. We don’t
              just build digital products; we build lasting relationships that
              grow with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
