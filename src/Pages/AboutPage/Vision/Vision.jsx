import vision from "../../../assets/AboutPage/vision.jpg";

const Vision = () => {
  return (
    <div>
      <div className="hero bg-[#F8FDFE] text-[#1D2345] h-[min-content] xl:py-20 lg:py-20 md:py-14 sm:py-12 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img
            src={vision}
            className=" rounded-lg shadow-2xl xl:w-1/2 lg:w-1/2 hover:grayscale "
          />
          <div className="xl:w-1/2 lg:w-1/2">
            <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug    inter-bold   capitalize">
              Our Vision
            </h1>
            <p className="py-6 text-justify ruluko-regular">
              At <strong>Bd Master Developer Agency</strong> , our vision is to
              lead digital transformation by creating smart, innovative
              solutions that help businesses stay ahead. We aim to deliver
              user-focused experiences that enhance competitiveness and enable
              scalable growth. By embracing emerging technologies and fostering
              deep partnerships, we continuously evolve—empowering our clients
              to succeed in the ever-changing digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
