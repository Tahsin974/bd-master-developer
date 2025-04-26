const SectionTitle = ({ heading, subheading, children }) => {
  return (
    <div className="lg:flex xl:flex justify-between items-center gap-4">
      {/* heading and subheading */}
      <div className="lg:w-2/4 md:w-2/4">
        <h5 className=" text-xl font-semibold ruluko-bold text-[#00626F]">
          {subheading}
        </h5>
        <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-3xl/snug    inter-bold font-bold text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
          {heading}
        </h1>
      </div>
      {/* Description */}
      <div className="lg:w-[38%] ">{children}</div>
    </div>
  );
};

export default SectionTitle;
